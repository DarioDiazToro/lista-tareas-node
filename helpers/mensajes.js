
  require('colors');


  const mostrarMenu=()=>{
    
    return new Promise((resolve)=>{

    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una Opcion'.green);
    console.log('========================='.green);


    console.log(`${'1'.green} Crear Tarea`);
    console.log(`${'2'.green} Listar Tareas`);
    console.log(`${'3'.green} Listar Tareas Completadas`);
    console.log(`${'4'.green} Listar Pendientes`);
    console.log(`${'5'.green} Completar Tareas(S)`);
    console.log(`${'6'.green} Borrar tarea`);
    console.log(`${'0'.green} Salir \n`);

     const readline = require('readline').createInterface({
         input:process.stdin,
         output: process.stdout, 
     });

     readline.question('Seleccione una Opcion: ',(opt)=>{
        readline.close();
        resolve(opt);

     });

    });

  };


  const pausa = ()=>{
     
     return new Promise((resolve)=>{

    const readline = require('readline').createInterface({
        input:process.stdin,
        output: process.stdout, 
    });

    readline.question(`\n Presione ${'ENTER'.green} para continuar \n`,(opt)=>{
        resolve();
       readline.close();
    });
   });

  };

  module.exports = {
     mostrarMenu,
     pausa
  };