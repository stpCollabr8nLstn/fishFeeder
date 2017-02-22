setInterval( () => {

  // Take picture
  $.get("/camera/snapshot");


}, 10000);

setInterval(function() {

  // Reload picture
  d = new Date();
  $("#camera").attr("src","pictures/image.jpg?" + d.getTime());

}, 1000);
