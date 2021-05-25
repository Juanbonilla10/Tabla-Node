const {logicaAplicada} = require('./componentes/logica');
const argv = require('./config/yargs');
const colors = require('colors');

const numero = argv.base;
const ver = argv.l;
const hasta = argv.hasta;

console.log('=========================');
console.log(`      Tabla del  ${numero}`);
console.log('=========================');


logicaAplicada(numero,ver,hasta)
    .then (respuesta=>{
        console.log(respuesta.underline.green);
    })
    .catch( error =>{
        console.log(`Error no se pudo ${error}`);
    });

   




