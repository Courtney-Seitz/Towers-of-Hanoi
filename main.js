console.log('javascript linked broh');

$(document).on("ready", function(){

  var numDisks = prompt("how many disks?")

  for (i=0; i<numDisks; i++){
    $('#first').append("<div class = disk></div>");
  }
})
