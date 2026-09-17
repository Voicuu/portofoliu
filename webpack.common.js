const Webpack = require("webpack");

module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    // Inject the PostHog config at build time so it stays configurable per environment
    new Webpack.DefinePlugin({
      "process.env.POSTHOG_KEY": JSON.stringify(
        process.env.POSTHOG_KEY ||
          "phc_zzBAvKba4vXesJkHQt98uqtURwAECUJAvxGnMEwoov7v"
      ),
      "process.env.POSTHOG_HOST": JSON.stringify(
        process.env.POSTHOG_HOST || "https://eu.i.posthog.com"
      ),
    }),
  ],
};
