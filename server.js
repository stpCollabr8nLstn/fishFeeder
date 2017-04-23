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
app.get('/schedule', (req, res) => {
    res.render('schedule', {
      title: 'Feeding Schedule',
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

server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = server;
