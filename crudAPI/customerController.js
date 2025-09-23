var express = require("express");
var router = express.Router();

var customers = [{
    "id": 1,
    "name": "Beno",
    "email": "beno@gmail.com"
},
{
    "id": 2,
    "name": "Solomon",
    "email": "solomon@gmail.com"
}];

var customer = [{
    "id": 1,
    "name": "Beno",
    "email": "beno@gmail.com"
}
];

router.get("/",(req,res)=> {
    res.send("<b>Customer API !</b>")
})
router.get("/customer",(req,res)=> {
    res.send(customers)
});
router.get("/customer/1",(req,res)=> {
    res.send(customer);
});

router.post("/customer/1",(req,res)=> {
    res.send(customer);
});

router.put("/customer/1",(req,res)=> {
    res.send(customer);
});

router.patch("/customer/1",(req,res)=> {
    res.send(customer);
});

module.exports = router;