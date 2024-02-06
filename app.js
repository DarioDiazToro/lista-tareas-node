 require("colors");
 const { dataBase, leerDB } = require("./helpers/guardar-archivo.js");
 const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmErase,
  mostrarListadoCheckList,
 } = require("./helpers/inquirer.js");

 const Tareas = require("./models/tareas.js");

 const main = async () => {
  let opt = "";

  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.CargarTareasFromArr(tareasDB);
  }

  do {
    // imprime el menu
    opt = await inquirerMenu();
    switch (opt) {
      //Crea la tarea
      case "1":
        const desc = await leerInput("Description: ");
        tareas.crearTarea(desc);
        break;
      //Muestra todas las tareas
      case "2":
        tareas.listadoCompletado();
        break;
      case "3":
        // Muestra todas las tareas Pompletadas
        tareas.listarPendientesCompletadas(true);
        break;
      // Muestra todas las tareas Pendientes
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
      case "5": //Completado | Pendiente
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;
      // Borrar tarea
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmErase("¿Esta seguro?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
          }
        }
        break;
    }

    dataBase(tareas.listadoArr);

    if (opt !== "0") await pausa();
  } while (opt !== "0");
};

main();
