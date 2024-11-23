
const { Router } = require('express');

const routesPage = require('./routes.pages.cjs');
const routesRest = require('./routes.rest.cjs');
const routesError = require('./routes.error.cjs');

const routes = Router();

routes.use(routesPage);
routes.use(routesRest);
routes.use(routesError);

module.exports = routes;
