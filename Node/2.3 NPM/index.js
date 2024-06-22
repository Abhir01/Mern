// var generateName = require('sillyname');

// CJS (common js)(uses 'require')
// ESM (ecma script modeule)(uses 'import' kw)
// to use module and esm json file me ; 'type:module'

// import generateName from "sillyname";
// var sillyName = generateName();

// console.log('My name is' +  sillyName);

import superheroes from "superheroes";
// from ke bad wala .json se utha lo ya require ke bad
// from ke pehle ______ = require(""); // ye dash wala object

const name = superheroes.random();
console.log("I am "+ name + "!");