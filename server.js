// Require
var express = require('express');
var app = express();

// Configure app
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'))

// Serve homepage
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    showContent: false,
    showSplash: true
  });
});

// Serve view
app.get('/view', (req, res) => {
    res.render('view', {
      title: 'View Fish',
      showContent: true,
      showSplash: false
    });
});

// Serve feeder
app.get('/feeder', (req, res) => {
  res.render('feeder', {
    title: 'Feeder',
    showContent: true,
    showSplash: false
  });
});

// Serve about
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    showContent: true,
    showSplash: false
  });
});

var server = app.listen(8081, function() {
    console.log('Listening on port %d', server.address().port);
});
