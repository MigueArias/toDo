const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
  case 'crear':
    //node app crear -d "pasear al perro"
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case 'listar':
    //node app listar
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log('======Por Hacer=========='.green);
      console.log(tarea.descripcion);
      console.log('Estado: ', tarea.completado);
      console.log('========================='.green);
    }

    break;

  case 'actualizar':
    //node app actualizar -d "pasear al perro" -c true
    console.log(porHacer.actualizar(argv.descripcion, argv.completado));

    break;

  case 'borrar':
    //node app borrar -d "pasear al perro" 
    console.log(porHacer.borrar(argv.descripcion));
    break;

  default:
    console.log('Comando no es reconocido');
    break;
}