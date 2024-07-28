// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected'); // Importa las rutas protegidas
const eventsRoutes = require('./routes/events');
const app = express();

// Conecta a MongoDB con la opción dbName especificada
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'good-kidz', // Nombre de la base de datos
})
    .then(() => console.log('Connected to Database'))
    .catch((error) => console.error('Database connection error:', error));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/events', eventsRoutes);
app.use('/api', protectedRoutes); // Usa las rutas protegidas bajo /api

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
