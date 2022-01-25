const fototeca = require('../models');
const colorChecker_ = require('../components/avcolor.js')

/*
 * 
 */

const showAllImages = (req, res) => {
    fototeca.find({})
        .then(fotos => {
            if (fotos.length) return res.status(200).render('gallery', { data: fotos })
        })
}

const uploadImage = async(req, res) => {
    const { title, image_url } = req.body
    let avcolor = await colorChecker_(image_url)

    let fototeca_ = new fototeca({
        title,
        image_url,
        dominantColor: avcolor
    })
    fototeca_.save()
        .then(foto => {
            res.status(201).redirect("/gallery")
        })
        .catch(err => res.status(500).send({ err }))
}

module.exports = {
    showAllImages,
    uploadImage
}