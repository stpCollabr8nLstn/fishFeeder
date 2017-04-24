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
