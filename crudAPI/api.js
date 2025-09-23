var express = require("express");
var app = express();
var productRouter = require("./productController");
app.use("/productAPI",productRouter);

var customerRouter = require("./customerController");
app.use("/customerAPI",customerRouter);

app.get("/", (req, res) => {
    res.send("<b>Express is super cool and easy</b>");
});

app.listen(8000, (err) => {
    if (err) console.log(err);
    console.log("Application started on port 8000");
})