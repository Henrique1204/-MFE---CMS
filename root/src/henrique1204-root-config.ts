import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';

const props = {};

const routes = constructRoutes(microfrontendLayout, {
  props,
  loaders: {},
});

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => {
  app.customProps = props;

  registerApplication(app);
});

layoutEngine.activate();

start();
