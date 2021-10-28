var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        vl = search_params.get("x")
        if(vl === null)
        {
            vl=Math.round(Math.random()*1000);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.cos() applied to ' + vl + ' is ' + Math.cos(vl))
        res.write('<br/>Math.asin() applied to ' + vl + ' is ' + Math.asin(vl))
        res.write('<br/>Math.asinh() applied to ' + vl + ' is ' + Math.asinh(vl))
        res.end()
      }
      });


module.exports = router;
