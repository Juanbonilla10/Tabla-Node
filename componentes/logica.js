const fs = require('fs');

let salida ='';




const logicaAplicada = (numero,ver=false,hasta)=>{

    const promesa = new Promise((resolve,reject)=>{

        for(let i = 1 ; i<=hasta;i++){
            salida += (`${numero} * ${i} = ${numero * i}\n`);
        }
    
        fs.writeFileSync(`./salida/Tabla del ${numero} creado.txt`,salida,);

        if(ver){
            console.log(salida);
        }

        resolve(`Tabla del  ${numero} creado.txt`);

    })

    return promesa;


    

}


module.exports = {
    logicaAplicada
}
