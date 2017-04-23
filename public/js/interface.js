var dateFormat = require('dateformat');

function checkFeedTime() {
  var now = new Date();
  var curHr = now.getHours();
  var nxtFeeding;

  if ( curHr < 6 ) {
    return 6 - curHr;
  }

  if ( curHr > 6 && curHr < 18) {
    return 18 - curHr;
  }

  return ( 24 - curHr ) + 6;
}

function revealTime() {
  $('li.time').removeClass('hidden');
  $(this).addClass('active');
  var numHrs = checkFeedTime();
  $('p.hours').prepend(numHrs);
}

function addFeeding() {
  var now = new Date();
  var curHr = now.getHours();
  var curMin = now.getMinutes();
  if (curHr === 6 || curHr === 18) {
    if (curMin === 0) {
      var date = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
      $(.times).append("<p>"+ date +"</p>");
    }
  }


}

setInterval(addFeeding, 60000);
