const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a la base de datos MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a la base de datos MongoDB Atlas:', error);
    }
};

module.exports = connectDB;