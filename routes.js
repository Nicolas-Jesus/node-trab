const express = require("express");
const routes = express.Router();
const Calculo = require("./control");

routes.get("/imc", Calculo.);

module.exports = routes;
