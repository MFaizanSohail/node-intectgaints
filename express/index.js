const express = require('express');
const app = express();
const PORT = 3000;
const routes = require("./routes")

 
app.use(routes);
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

