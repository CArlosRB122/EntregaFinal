// Cargar la librería express
const express = require('express');
const app = express();

// Definir el puerto
const PORT = 3000;

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo! Esta es una aplicación Node.js en Docker.');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
