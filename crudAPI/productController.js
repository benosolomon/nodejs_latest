var express = require("express");
var router = express.Router();

var products = [{
    "id": 1,
    "name": "Oneplus",
    "price": 1000
},
{
    "id": 2,
    "name": "Samsung",
    "price": 2000
}];

var product = [{
    "id": 1,
    "name": "Oneplus",
    "price": 1000
},
];

router.get("/product",(req,res)=> {
    res.send(products)
});
router.get("/product/1",(req,res)=> {
    res.send(product);
});

router.post("/product/1",(req,res)=> {
    res.send(product);
});

router.put("/product/1",(req,res)=> {
    res.send(product);
});

router.patch("/product/1",(req,res)=> {
    res.send(product);
});

module.exports = router;