const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const multer = require('multer');

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(routes);
app.listen(port, function (err) {
	if (err) console.log(err);
	console.log("Server listening on port", port);
});








// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();


// app.use(cors());
// app.use(express.static("./public"));


// var storage = multer.diskStorage({

// destination: "./public/images",
// filename: function (req, file, cb) {
// cb(null, Date.now() + '-' +file.originalname )
// }
// })



// var upload = multer({ storage: storage }).array('file');


// app.post('/upload',function(req, res) {
 
// upload(req, res, function (err) {
//        if (err instanceof multer.MulterError) {
//            return res.status(500).json(err)
//        } else if (err) {
//            return res.status(500).json(err)
//        }
//   return res.status(200).send(req.file)

// })

// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=> {
// console.log("server started at port "+PORT);
// });