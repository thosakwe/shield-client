const SERVER = "http://localhost:3000/api";

const React = require("react");
const ReactDOM = require("react-dom");

const authentication = require("feathers-authentication/client")
const feathers = require("feathers/client");
const hooks = require("feathers-hooks");
const jQuery = require("jquery");
window.jQuery = jQuery;
const rest = require("feathers-rest/client");

const Routes = require('./routes.jsx');

const app = feathers()
  .configure(hooks())
  .configure(rest(SERVER).jquery(window.jQuery))
  .configure(authentication({storage: window.localStorage}));
const host = document.getElementById('app');

Routes(app, host);
