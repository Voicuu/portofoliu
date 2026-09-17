import posthog from "posthog-js";
import initApp from "./js/index";
import "./style/main.scss";

posthog.init(process.env.POSTHOG_KEY, {
  api_host: process.env.POSTHOG_HOST,
});

initApp();
