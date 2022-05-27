exports.getIndexPage = (req, res) => {
    console.log(req.session);
    res.render("index", { page: " index" });
};
exports.getAboutPage = (req, res) => {
    res.render("about", { page: " about" });
};
exports.getPhotosPage = (req, res) => {
    console.log(res.locals, "asdsdddddd");
    res.render("photo", { page: " photos", photo: { author: 1 } });
};
exports.getContactPage = (req, res) => {
    res.render("contact", { page: " contact" });
};
exports.getLoginPage = (req, res) => {
    res.render("login", { page: " login" });
};
exports.getRegisterPage = (req, res) => {
    res.render("register", { page: " register" });
};
