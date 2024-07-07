const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dybaacast",
  api_key: "874591124149691",
  api_secret: 'WHMfC90uRUUA71-y_kC_c01RdyU',
  secure: true
});
console.log(cloudinary.config());
module.exports = cloudinary;
