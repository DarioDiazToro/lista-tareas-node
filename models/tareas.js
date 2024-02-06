
const Tarea = require("./tarea");



  /**
   *   _listado:
   *        {'uuid-2342-232-1: {id:12, desc:ass,completadoEn:2423}'}
   */

  class Tareas {
    _listado = {};

    get listadoArr(){
      const listado = [];
      Object.keys(this._listado).forEach((key)=>{
        const tarea = this._listado[key];
          listado.push(tarea);
      });

      return listado;
    };

    constructor(){
        this._listado = {};
    }

    CargarTareasFromArr(tareas= []){
      tareas.forEach((tarea)=>{
        this._listado[tarea.id] = tarea;
      });
    };

    crearTarea(desc){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    borrarTarea(id = ''){
      if(this._listado[id]){
        delete this._listado[id];
      }
    };

    listadoCompletado(){
      console.log();

      Object.values( this._listado).forEach((tarea,index )=>{
        index = index +1;
       let string =  index.toString();

         if(tarea.completadoEn!== null){
           console.log(`${ string.green}. ${tarea.desc} :: ${'Completada'.green}`);
         }else{
           console.log(`${ string.green}. ${tarea.desc} :: ${'Pendiente'.red}`);
         };
      });
    };

    listarPendientesCompletadas(completadas = true){
       console.log();

        let contador = 0;
       this.listadoArr.forEach((tarea)=>{
        const {desc} = tarea;
        const {completadoEn} = tarea;
        const estado =(completadoEn)? 'Completada'
                                    : 'Pendiente';

          let stringContador;

        if(completadas){
           if(estado === 'Completada'){
             contador = contador +1;
              stringContador =   contador.toString();
             console.log(`${(stringContador +".").green} ${desc} :: ${completadoEn.green}`);
           };
         }else{
           if(estado === 'Pendiente'){
            contador = contador +1;
              stringContador =   contador.toString();
            console.log(`${(stringContador +".").green} ${desc} :: ${estado.red}`);
           };
         };
       });
    };

    toggleCompletadas(ids =[]){
      ids.forEach((id)=>{
        const tarea = this._listado[id];
        if(!tarea.completadoEn){
          tarea.completadoEn = new Date().toISOString();
        };
      });

      this.listadoArr.forEach((tarea)=>{
         if(!ids.includes(tarea.id)){
         this._listado[tarea.id].completadoEn = null;
         };
      });
    };
  };

   
  module.exports = Tareas;