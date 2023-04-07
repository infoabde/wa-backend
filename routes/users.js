var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', (req, res) => {
  const date = new Date();
  const year = date.getYear()
  res.json({ now: year });
 });



module.exports = router;
