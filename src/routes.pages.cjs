
const { Router } = require('express');
const renderPage = require('./rendering.cjs');

const MailController = require('../controllers/mail.controller.cjs');

const routesPage = Router();

routesPage.get('/', (req, res) =>
{
    renderPage('Home', 'index', res, { _style: ['index'] });
});

routesPage.get('/registered', (req, res) =>
{
    renderPage('Registered', 'registered', res, { _style: ['registered'] });
});

routesPage.get('/list', (req, res) =>
{
    let list = MailController.MailList;

    renderPage('Mail List', 'list', res, { _style: ['mail.list'], list: list });
});

module.exports = routesPage;
