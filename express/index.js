const express = require("express");
const app = express();
const PORT = 3000;
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");


mongoose.connect('mongodb://127.0.0.1:27017', {
	useNewUrlParser: true, useUnifiedTopology: true,
});

const con = mongoose.connection
con.on('open', function() {
	console.log("connected");
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
