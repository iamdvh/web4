var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/fpt", (req, res) => {
  var member = ["Hieu", "Tien", "Kien", "Quan dan ngu ngu cho"];
  var fpt = "greenwich";
  var capital = [
    ["Viet Nam", "Hanoi"],
    ["Thailand", "Bangkok"],
    ["Japan", "Tokyo"],
  ];
  res.render("fpthanoi", { member: member, fpt: " Ha noi", Capital: capital });
});
// Display login form (Get method)
router.get('/', (req, res) => {
  res.render('login');
})
// process login form(Post method)
router.post('/', (req, res) => {
  // save input data to $data variable
  $data = req.body
  // console.log($data)
  // res.send($data)
  // validate login infomation
  var data = req.body
  var username = data.username;
  var password = data.password;
  var message = null;
  if(username == "iamdvh" && password == "12345")
  {
    message = "Login successfully!!!"
    res.redirect('/home')
    
  } else{
    message = "Login Failed!!!";
    res.redirect('/')
  }
})
module.exports = router;
