
module.exports = app => {
    const alejandroCorrea = require('../controllers/alejandroCorrea.controllers');
    const router = require('express').Router();
    router.get('/consultar', alejandroCorrea.findAll)
    router.get('/create', alejandroCorrea.create)
    app.use('/api', router);
}