const functions = require('firebase-functions');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

//app.set('port', process.env.PORT || 4000)
//rutas
app.use(require('./src/router/index'));

//Motor de vista Handlebars
app.set('views', path.join(__dirname, './src/views'));
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    partialsDir: path.join(__dirname, './src/views/layouts/partials'),
    extname: '.hbs' 
}));
app.set('view engine', '.hbs');

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

exports.app = functions.https.onRequest(app);
/*app.listen(app.get('port'), () =>{
    console.log('servidor escuchando en el puerto: ', app.get('port'))
});*/