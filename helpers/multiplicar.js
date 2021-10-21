const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base = 1, l = false) => {
    return new Promise((resolve, reject) => {
        console.log(`=========TABLA DEL NUMERO ${base}=========`);
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base}X${i}= ${base * i}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        // if(l){
        // console.log(salida);
        // }
        resolve(`tabla-${base}.txt`);

    })

}
// Esta forma es con async regresa una promesa y es lo mismo que arriba
const crearArchivoNuevaForma = async (base = 1, l = false,h=10) => {
    try {


        let salida = '';
        for (let i = 1; i <= h; i++) {
            salida += `${base}X${i}= ${base * i}\n`;
        }
        if (l) {
            console.log(`=========TABLA DEL NUMERO ${base}=========`.trap);
            console.log(salida.rainbow);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

}
// de esta manera se exporta 
module.exports = {
    crearArchivo,
    crearArchivoNuevaForma
}