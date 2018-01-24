var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const express = require("express")
const app = express()

app.get('/', (req, res)=> {

  res.send("Hello Express!!")
});

app.listen(3000, () =>{
  console.log("connecting localhost:3000")
})


module.exports = router;
