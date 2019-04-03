const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            if (!Number(limite)) {
                reject(`${base} no es un numero o ${limite} no es numero`);
                return;
            }
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} es ${base * i} \n`
        }

        resolve(`${data}`);
    })
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} es ${base * i} \n`
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}