const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes');
const errorHandler = require('./middleware/error-handler');
//Settings
const port = process.env.NODE_ENV === 'production' ? 80 :4000;
//External Access from Fronted
app.use(cors());
//Middlewares
app.use(morgan('dev'));
app.use(errorHandler);
//Support the data that we will receive (capturar datos del formulario)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Index Route from folder
app.use('/api',indexRouter);
//Starting the server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
//node-fetch para hacer peticiones post get delete desde otros servicios from web
//npm run dev for nodemon