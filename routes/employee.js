var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('employee/add');
})


router.post('/', (req, res) =>{
    var employee = req.body;
    res.render("employee/view", { employee: employee });
})


module.exports = router;