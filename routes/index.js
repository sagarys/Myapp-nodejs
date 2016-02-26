var express = require('express');
var router = express.Router();

/* GET home page. */
var favicon = require('serve-favicon');
 
var app = express();
//app.use(favicon(__dirname + '/public/favicon.ico'));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'What kind of person you are :' });
});

router.post('/', function (req, res) {
    console.log(req.body.cars);
    var x=parseFloat(req.body.num1, 10);
    //var y=parseFloat(req.body.num2, 10);
    var y=parseFloat(req.body.cars, 10);
    switch (y) {
    case 1:
        res.sendfile('./public/images/january.jpg')
        //res.redirect('http://10.91.10.102:3000/images/january.jpg');
        break;
    case 2:
        res.sendfile('./public/images/february.jpg')
        //res.redirect('http://10.91.10.102:3000/images/february.jpg');
        break;
    case 3:
        res.sendfile('./public/images/march.jpg')
        //res.redirect('http://10.91.10.102:3000/images/march.jpg');
        break;
    case 4:
        res.sendfile('./public/images/april.jpg')
        //res.redirect('http://10.91.10.102:3000/images/april.jpg');
        break;
    case 5:
        res.sendfile('./public/images/may.jpg')
        //res.redirect('http://10.91.10.102:3000/images/may.jpg');
        break;
    case 6:
        res.sendfile('./public/images/june.jpg')
        //res.redirect('http://10.91.10.102:3000/images/june.jpg');
        break;
    case 7:
        res.sendfile('./public/images/july.jpg')
        //res.redirect('http://10.91.10.102:3000/images/july.jpg');
        break;
    case 8:
        res.sendfile('./public/images/august.jpg')
        //res.redirect('http://10.91.10.102:3000/images/august.jpg');
        break;
    case 9:
        res.sendfile('./public/images/september.jpg')
        //res.redirect('http://10.91.10.102:3000/images/september.jpg');
        break;
    case 10:
        res.sendfile('./public/images/october.jpg')
        //res.redirect('http://10.91.10.102:3000/images/october.jpg');
        break;
     case 11:
        res.sendfile('./public/images/november.jpg')
        //res.redirect('http://10.91.10.102:3000/images/november.jpg');
        break;
     case 12:
        res.sendfile('./public/images/december.jpg')
        //res.redirect('http://10.91.10.102:3000/images/december.jpg');
        break;
    }
   // res.sendStatus('element.value\n' + z);
    
   
});

module.exports = router;
