const express = require('express');
const connectDB = require('./config/config');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas
app.use('/tasks', tasksRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});