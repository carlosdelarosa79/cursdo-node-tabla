const { describe } = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('l',{
                  alias: 'listar',
                  type:'boolean',
                  demandOption: true,
                  default: false,
                  describe: 'muestra la tabla de la consola'
                
                })
                .option('h',{
                  alias: '',
                  type:'number',
                  default: 10,
                  describe: 'este es el numkero hasta donde quiere la tabla'
                
                })
                .check((argv, options) =>{
                  if ( isNaN (argv.b) ){
                      throw 'la base tiene que ser un numero'
                  }
                  return true;
                })
                .argv;

                module.exports = argv;