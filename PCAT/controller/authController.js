const User = require("../models/userModel");

exports.registerUser = async (req, res, next) => {
    let { firstname, lastname, email, username, password, passwordconfirm } = req.body;
    const user = await User.create({ firstname, lastname, email, username, password, passwordconfirm });
    res.redirect("/");
};

exports.loginUser = async (req, res, next) => {
    let user = await User.findById("628be763bb1ff041267839be");
    req.session.user = user;
    
    console.log(user, await user.checkPassword("1"), "asas");
    res.redirect("/");
};
