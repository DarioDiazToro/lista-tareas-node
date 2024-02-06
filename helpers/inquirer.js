 
 require('colors');

 const inquirer = require('inquirer');

  const questions = [
      {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices:[
          {
            value: '1',
            name:`${'1'.green}. Crear tarea`
          },
          {
            value: '2',
            name:`${'2'.green}. Listar tareas`
          },
          {
            value: '3',
            name:`${'3'.green}. Listar tareas Completadas`
          },
          {
            value: '4',
            name:`${'4'.green}. Listar tareas Pendientes`
          },
          {
            value: '5',
            name: `${'5'.green}. Completar tarea(s)`
          },
          {
            value: '6',
            name:`${'6'.green}. Borrar tarea`
          },
          {
            value: '0',
            name:`${'0'.green}. Salir`
          } 
        ]
      }
 ];


 const pausaQuestion = [
          {
            type: 'input',
            name: 'opcion',
            message: `Presione ${'Enter'.green} para continuar`,
          }
 ];

 const inquirerMenu =async()=>{
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una Opcion'.white);
    console.log('========================='.green);

   const {opcion} = await inquirer.prompt(questions);
    return opcion;
 };
 

 const pausa = async()=>{
    
  console.log('\n');
  const opt = await inquirer.prompt(pausaQuestion);
  return opt;

 };

  
 const leerInput = async(message)=>{
  const questions = [
         {
           type:'input',
           name: 'desc' ,
           message,
           validate(value){
               if(value.length ===0){
                  return  'Por favor ingresa algo';
               };
               return true;
           }
         }
       ];

 const {desc} = await inquirer.prompt(questions);

 return desc;
 };

  const listadoTareasBorrar =async(tareas = [])=>{

    const choices = tareas.map((tarea,i)=>{
      const index = `${i+1}.`.green;

      return {
         value:tarea.id,
         name: `${index}  ${tarea.desc}`
      };
    });

    choices.unshift({
        value:'0',
        name: '0'.green + "   Cancelar",
    });

    const questions = [
              {
               type: 'list',
               name: 'id',
               message: 'Borrar',
               choices,
              }
    ];

    const {id} = await inquirer.prompt(questions);

    return id;
  };

   const confirmErase=async(message)=>{
    const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    }
  ];

    const {ok}  = await inquirer.prompt(question);

    return ok;

   };

   const mostrarListadoCheckList =async(tareas = [])=>{

    const choices = tareas.map((tarea,i)=>{
      const index = `${i+1}.`.green;

      return {
         value:tarea.id,
         name: `${index}  ${tarea.desc}`,
         checked: (tarea.completadoEn)?true:false,
      };
    });

    const question = [
              {
               type: 'checkbox',
               name: 'ids',
               message: 'Selecciones',
               choices,
              }
    ];

    const {ids} = await inquirer.prompt(question);
    // console.log(ids);
    return ids;
  };

 module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmErase,
    mostrarListadoCheckList
 }