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

const deleteImage = async(req, res, next) => {
    let id = req.params.id
    console.log(id)
    fototeca.deleteOne({ _id: id })
        .then(res => {
            console.log("deleted", id)
        })


}

const uploadImage = async(req, res) => {
    const { title, image_url } = req.body
    let checkIfExists = await fototeca.findOne({ image_url }).count()

    try {
        var avcolor = await colorChecker_(image_url)
    } catch (error) {
        return res.status(500).send('Server Error!')
    }

    if (checkIfExists > 0) {
        return res.status(200).render('upload', { imageAlreadyExist: true })
    }

    let date = new Date(Date.now()).toLocaleDateString()
    let fototeca_ = new fototeca({
        title,
        image_url,
        date,
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
    uploadImage,
    deleteImage
}