$(document).ready(function() {
  $("form#wheretogo").submit(function(event) {
    var name = $("input#name").val();
    var location = $("select#location").val();
    var busyness = $("select#busyness").val();
    var foodtype = $("select#food").val();
    var timeliness = $("select#time").val();
    var budget = $("#budget").val();
event.preventDefault();
$(".name").text(name);
if (location==="ocean" && busyness==="busy" && foodtype==="plain"){
  $('#rio').show();
  } else if (location==="ocean" && busyness==="calm" && foodtype==="spicy"){
    $('#todossantos').show();
  } else if (location==="ocean" && busyness==="busy" && foodtype==="spicy"){
    $('#goa').show();
  } else if (location==="outdoors" && busyness==="calm" && budget==="1"){
    $('#preikestolen').show();
  } else if (location==="outdoors" && busyness==="calm"){
    $('#stmoritz').show();
  } else if (location==="outdoors" && busyness==="busy" && foodtype==="plain"){
    $('#machupicchu').show();
  } else if (location==="outdoors" && busyness==="busy" && foodtype==="spicy"){
    $('#thailand').show();
    }
  });
});
