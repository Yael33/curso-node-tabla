
// const { argv } = require('process');
// const argv = require('yargs')
// .option('b',{
//     alias:'base',
//     type:'number',
//     demandOption:true
// }).option('l',{
//     alias:'listar',
//     type:'boolean',
//     demandOption:true,
//     default:false
// }).check((argv,options)=>{
//     if(isNaN(argv.b)){
//         throw 'La base tiene que ser un numero';
//     }
//     return true;
//     // Regresar true si no hay error
// })
// .argv

 const argv=require('./config/yargs');
const { crearArchivo, crearArchivoNuevaForma } = require('./helpers/multiplicar');
console.clear();
// Argumentos de consola
// console.log(process.argv);
// console.log(argv);
// console.log(argv.base);
// const [,,arg3='base=5']=process.argv;
// Desestructurar el arg3
// const [,base]=arg3.split('=');
// console.log(base);
// Argumentos de consola fin


// Esto nos da dos argumentos el que ejecuta y el path
// console.log(`=========TABLA=========`);
// let base = 95;
// let salida = '';

// for (i = 1; i <= 10; i++) {
//     salida += `${base}X${i}= ${base * i}\n`
// }
// fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log('Tabla creada');
// });

// El error para writeFileSync se trata con un try catch
// fs.writeFileSync(`tabla-${base}.txt`, salida);
// console.log(`Salida de tabla-${base}.txt`);
// Que le vamos a pasar fs.writeFile nombre del archivo o path, argumento que queremos imprimir,callback para error

crearArchivoNuevaForma(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(`${nombreArchivo} creado`))
.catch(err => console.log(err));