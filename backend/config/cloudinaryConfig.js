// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dybaacast",
  api_key: "874591124149691",
  api_secret: 'WHMfC90uRUUA71-y_kC_c01RdyU',
  secure: true
});
// API environment variable:
// CLOUDINARY_URL=cloudinary://874591124149691:WHMfC90uRUUA71-y_kC_c01RdyU@dybaacast
console.log(cloudinary.config());
module.exports = cloudinary;
