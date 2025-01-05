#!/usr/bin/env

const createHtmlenv = require("./create/html/createhtmlenv");
const createReactenv = require("./create/react/createreactenv");
const kboom = require("./tools/kboom");
const make = require("./tools/make")
const colorCli = require("./tools/colorcli");
const  serverclasic = require("./tools/server");


const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("No se ha especificado parametro o una opción valida");
  process.exit(-1);
}

var inforParams = {
  "--version": "@clasictemplates! v1.0.8",
  "--help": "Este es un mensaje de ayuda",
  "react-env": "Creando archivo de configuración para React...",
  "html-env": "Creando archivo de configuración para HTML...",
};

var arguments = args;

var params1 = arguments[0];
var params2 = arguments[1];
var params3 = arguments[2];

interprete(params1);

function interprete(params) {
  switch (params) {
    case "--version":
        colorCli(inforParams["--version"], "yellow");
      break;
    case "--help":
        colorCli(inforParams["--help"], "blue");
      
      break;
    case "server":
        if (params2 == "init") {
            serverclasic();
        }
    case "make":
        make(params2);
    case "react-env":
        colorCli(inforParams["react-env"], "blue");
      try {
        createReactenv();
      } catch (err) {
        colorCli(err, 31); 
      }
      break;

    case "html-env":
        colorCli(inforParams["html-env"], "blue");
      try {
        createHtmlenv();
      } catch (err) {
        colorCli(err, "red");
      }
      break;
    default:
        colorCli("No se ha especificado parametro o una opción valida", "red");
      break;
  }
}

