const deleteImage = async(e) => {
    document.getElementById(e.target.value).remove()

    await fetch(`gallery/delete/${e.target.value}`, {
        method: 'delete'
    })


}