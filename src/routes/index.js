const express = require('express')
const fototecaController = require('../controllers');

const router = express.Router()


let id = 0;
let gallery = [];

router.get('/gallery', fototecaController.showAllImages)

router.get('/upload', (req, res) => {
    res.render('upload', { title: 'Awesome Photo Gallery', message: 'Index Web' })

})

router.post('/upload', fototecaController.uploadImage)



module.exports = router