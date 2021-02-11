const express = require("express");
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor esta corriendo en puerto 3000 ")
})

const mainRouter = require('./routes/mainRouter');
const logicaRouter = require('./routes/logicaRouter');
const validacionRouter = require('./routes/validacionRouter');
const loginRouter = require('./routes/loginRouter');

app.use('/', mainRouter);
app.use('/logica', logicaRouter);
app.use('/validacion', validacionRouter);
app.use('/login', loginRouter);