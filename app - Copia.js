const express = require('express');
const  swaggerUi  = require('swagger-ui-express');
const swaggerDocs = require('./swagger');

const indexRouter = require('./routes/index');
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(swaggerDocs))
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;
