const {Router} = require('express');
const router = Router();

const controller = require('../controller/Admin.controller');

router.get('/', controller.inicio);
router.post('/', controller.inicio);

router.get('/admin', controller.admin);
router.post('/admin', controller.admin);

router.get('/login', controller.login);
router.post('/login', controller.login);

router.post('/comentar', controller.comentar);
router.get('/comentar', controller.comentar);

router.post('/guardar', controller.guardar);
router.get('/guardar', controller.guardar);

//router.get('/leerDatos', controller.leerDatos);

module.exports = router;