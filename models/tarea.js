 
const { v4: uuidv4 } = require('uuid');

  class Tarea {
     id = '';
     completadoEn = null;
     desc = '';

     constructor(desc){
        this.desc = desc;
        this.id = uuidv4();
        this.completadoEn = null;
     };
  };

  module.exports = Tarea;