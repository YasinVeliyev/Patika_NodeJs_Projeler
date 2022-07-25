const Photo = require("../models/photoModel");

exports.addPhoto = async (req, res, next) => {
    console.log(req.file);
    await Photo.create({
        name: req.body.name,
        src: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        author: req.session.user._id,
    });
    res.redirect("/photos");
};
