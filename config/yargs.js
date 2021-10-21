const argv = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar ejemplo tabla del 5'
}).option('l',{
    alias:'listar',
    type:'boolean',
    demandOption:true,
    default:false,
    describe:'Si pones l mostrará o listará la tabla (creando el archivo) y en caso de no ponerla, sólo creará el archivo'
}).option('h',{
    alias:'hasta',
    type:'number',
    demandOption:true,
    default:false,
    describe:'Si pones h nos dirá hasta que numero quieres la tabla'
}).check((argv,options)=>{
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero';
    }
    return true;
    // Regresar true si no hay error
})
.argv

module.exports=argv;
// Así se exporta argv