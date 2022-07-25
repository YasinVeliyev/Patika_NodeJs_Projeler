const Photo = require("../models/photoModel");

exports.addPhoto = async (req, res, next) => {
    await Photo.create({
        name: req.body.name,
        src: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        author: req.session.user._id,
    });
    res.redirect("/photos");
};

exports.deletePhoto = async (req, res, next) => {
    await Photo.findOneAndDelete({ _id: req.body.photo, author: req.session.user._id });
    res.redirect("/photos");
};
