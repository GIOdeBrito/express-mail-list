
const express = require('express');
const { Router } = express;
const { insertMailInList } = require('./mails.list.cjs');

const routesRest = Router();

routesRest.use(express.urlencoded({ extended: true }));

routesRest.get('/v1/test', (req, res) =>
{
    res.send({ version: "v1", time: new Date() });
});

routesRest.post('/v1/registermail', (req, res) =>
{
    const mail = {
        mail: req.body.Mail,
        name: req.body.Name
    };

    insertMailInList(mail);

    res.redirect('/registered');
});

routesRest.post('/v1/removeentry', (req, res) =>
{

});

routesRest.post('/v1/*', (req, res) =>
{
	res.status(404).send({ status: 404 });
});

module.exports = routesRest;
