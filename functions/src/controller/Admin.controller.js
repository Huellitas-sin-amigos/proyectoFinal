const { firebase } = require('../../configFirebase');

const controller = {};

const db = firebase.firestore();


controller.inicio = (req, res) =>{
    res.render('index.hbs');
}

controller.admin = (req, res) =>{   
    //res.render('./admin/index.hbs');
    console.log(req.body);
    let listaMascota = [];
    db.collection("mascota").get()
    .then((QuerySnapshot) => {
        QuerySnapshot.forEach((doc) =>{
            listaMascota.push(doc.data())
        });
        res.render('./admin', {
            mascota: listaMascota
        });
    })
    .catch(function (error){
        console.log("Error: ", error)
    });
}

controller.login = (req, res) =>{
    res.render('./login/index.hbs');
}

controller.comentar = (req, res) =>{    
    db.collection("comentarios").add({
        comen: req.body.comen,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            res.redirect('/');
            res.render();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}

controller.guardar = (req, res) =>{    
    db.collection("mascota").add({
        nombre: req.body.nombre,
        edad: req.body.edad,
        raza: req.body.raza,
        tamano: req.body.tamano,
        sexo: req.body.sexo,
        caracter: req.body.caracter,
        enfermedad: req.body.enfermedad,
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    res.render('./admin');
}


/*controller.leerDatos = (req, res) => {
    console.log(req.body);
    let listaMascota = [];
    db.collection("mascota").get()
    .then((QuerySnapshot) => {
        QuerySnapshot.forEach((doc) =>{
            listaMascota.push(doc.data())
        });
        res.render('./admin', {
            mascota: listaMascota
        });
    })
    .catch(function (error){
        console.log("Error: ", error)
    });
}*/

module.exports = controller;