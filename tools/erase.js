const fs = require('fs');

function erase(paramsfile) {
  fs.unlink(paramsfile, (err) => {
    if (err) {
      console.error('Error al eliminar el archivo:', err);
      return;
    }
    console.log(`Archivo eliminado: ${paramsfile}`);
  });
}


