const { getColorFromURL } = require('color-thief-node');


const colorChecker = async (image_url) => {
    const dominantColor = await getColorFromURL(image_url)
    return dominantColor;
}


module.exports = colorChecker;
