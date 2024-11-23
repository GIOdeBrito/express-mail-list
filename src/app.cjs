
const express = require('express');
const path = require('node:path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../private/views'));

app.use('/public', express.static(path.join(__dirname, '../public/')));

/* Request routes */

const routes = require('./routes.cjs');
app.use(routes);

/* Server start */

const port = 8080;
app.listen(port, () => `Listening on PORT ${port}`);
