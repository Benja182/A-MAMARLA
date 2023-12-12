const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal en el servidor');
};

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Conexion MongoDb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/trabajo_turismo', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Rutas
const userRoutes = require('./app/routes/userRoutes');
const postRoutes = require('./app/routes/postRoutes');
const commentRoutes = require('./app/routes/commentRoutes');

app.use(errorHandler);

app.use('/api/posts', require('./middlewares/validationMiddleware'));
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
