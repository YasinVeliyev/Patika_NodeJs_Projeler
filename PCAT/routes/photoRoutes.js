const path = require("node:path");
const { Router } = require("express");
const photoController = require("../controller/photoController");
const multer = require("multer");

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/photos/");
    },
    filename: function (req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            var err = new Error();
            err.code = "filetype"; // to check on file type
            return cb(err);
        }
        console.log(file);
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

const router = Router();

router.post("/add_photo", upload.single("src"), photoController.addPhoto);
router.delete("/:photoId/delete-photo", photoController.deletePhoto);

module.exports = router;
