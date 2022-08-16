
const multer = require('multer');
const path = require('path')
const uuid = require('uuid').v4;
/*******************************************************************************
Configuration for MULTER (image upload).
*******************************************************************************/

const storage = multer.diskStorage({
    destination: function (req:any, file:any, callback:any) {
        callback(null,  process.cwd() + "upload/")
    },
    filename: function (req:any, file:any, callback:any) {
        var fileName = path.parse(file.originalname).name;
        callback(null, uuid() + `-` + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage,
    limits: {
        fileSize: '4MB'
    },
});
exports.upload = upload;