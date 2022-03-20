const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes');
//Settings
const { port, api } = require('./config');
//External Access from Front
app.use(cors());
//App Middleware
app.use(morgan('dev'));
//Support the data that we will receive
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Index Route from folder
app.use(api.prefix, indexRouter);
//Starting the server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
//npm run dev for nodemon