import { registerApplication, start, LifeCycles } from "single-spa";

// INFO: Arquivo responsável pela importação e registro dos microfrontends no orquestrador

registerApplication({
  name: "@home-hub/hello-world",
  app: () => System.import<LifeCycles>("@home-hub/hello-world"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
