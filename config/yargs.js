const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer',
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Completar una tarea',
};

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', {
    descripcion
  })
  .command('actualizar', 'Actualizar un elemento por hacer', {
    descripcion,
    completado,
  })
  .command('borrar', 'Borrar un elemento por hacer', {
    descripcion,
  })
  .help()
  .argv;

  module.exports = {
    argv,
  };
// comando crear
//node app crear -d "pasear al perro"

// comando actualizar
//node app actualizar -d "pasear al perro" -c true


// comando borrar
//node app borrar -d "pasear al perro" 

// comando listar
   //node app listar

   //help