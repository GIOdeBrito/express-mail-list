
const { Router } = require('express');
const renderPage = require('./rendering.cjs');

const routesError = Router();

routesError.use((req, res) =>
{
    renderPage('Not Found', 'not-found', res);
});

module.exports = routesError;
