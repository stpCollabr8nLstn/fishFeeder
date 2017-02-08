// Require
// var sensorLib = require('node-dht-sensor');
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

var piREST = require('pi-arest')(app);

// Set Pi properties
piREST.set_id('1');
piREST.set_name('my_RPi');

// Make measurements from sensors
//var dht_sensor = {
//    initialize: function () {
//        return sensorLib.initialize(11, 4);
//    },
//    read: function () {
//        var readout = sensorLib.read();
//
//        piREST.variable('temperature',readout.temperature.toFixed(2));
//       piREST.variable('humidity', readout.humidity.toFixed(2));
//
//        console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
//            'humidity: ' + readout.humidity.toFixed(2) + '%');
//        setTimeout(function () {
//            dht_sensor.read();
//        }, 2000);
//    }
//};

//if (dht_sensor.initialize()) {
//    dht_sensor.read();
//} else {
//    console.warn('Failed to initialize sensor');
//}

var server = app.listen(8081, function() {
    console.log('Listening on port %d', server.address().port);
});
