
const express = require('express');
const { Router } = express;

const routesRest = Router();

routesRest.use(express.urlencoded({ extended: true }));

/* Controllers */

const TestController = require('../controllers/test.controller.cjs');
const MailController = require('../controllers/mail.controller.cjs');

/* GET */

routesRest.get('/v1/test', TestController.send);

/* POST */

routesRest.post('/v1/registermail', MailController.register);

/* DELETE */

routesRest.delete('/v1/removeentry', MailController.remove);

module.exports = routesRest;
