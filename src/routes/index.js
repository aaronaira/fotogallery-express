const express = require('express')
const router = express.Router()
const colorChecker_ = require('../components/avcolor.js')

let id = 0;
let gallery = [];

router.get('/', (req, res)=> {
    res.render('index', {title: 'Awesome Photo Gallery', message: 'Index Web'})
})

router.get('/upload', (req, res)=> {
    res.render('upload', {title: 'Awesome Photo Gallery', message: 'Index Web'})
    
})
router.post('/upload', async (req, res) => {
    const { title, image_url, date } = req.body

    let avcolor = await colorChecker_(image_url)
    
    gallery.push({

            id: id++, 
            title, 
            image_url, 
            date,
            avcolor
        })
    
    console.log(gallery);

    res.redirect("/upload")
})

router.get('/gallery', (req, res) => {
    res.render('gallery', {data: gallery})
})


module.exports = router