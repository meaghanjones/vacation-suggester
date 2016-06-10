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
    $('#todossantos').hide();
    $('#goa').hide();
    $('#preikestolen').hide();
    $('#stmoritz').hide();
    $('#machupicchu').hide();
    $('#thailand').hide();
    } else if (location==="ocean" && busyness==="calm" && foodtype==="spicy"){
      $('#todossantos').show();
      $('#rio').hide();
      $('#goa').hide();
      $('#preikestolen').hide();
      $('#stmoritz').hide();
      $('#machupicchu').hide();
      $('#thailand').hide();
    } else if (location==="ocean" && busyness==="busy" && foodtype==="spicy"){
      $('#goa').show();
      $('#rio').hide();
      $('#todossantos').hide();
      $('#preikestolen').hide();
      $('#stmoritz').hide();
      $('#machupicchu').hide();
      $('#thailand').hide();
    } else if (location==="outdoors" && busyness==="calm" && budget==="1"){
      $('#preikestolen').show();
      $('#rio').hide();
      $('#todossantos').hide();
      $('#goa').hide();
      $('#stmoritz').hide();
      $('#machupicchu').hide();
      $('#thailand').hide();
    } else if (location==="outdoors" && busyness==="calm"){
      $('#stmoritz').show();
      $('#rio').hide();
      $('#todossantos').hide();
      $('#goa').hide();
      $('#preikestolen').hide();
      $('#machupicchu').hide();
      $('#thailand').hide();
    } else if (location==="outdoors" && busyness==="busy" && foodtype==="plain"){
      $('#machupicchu').toggle();

    } else if (location==="outdoors" && busyness==="busy" && foodtype==="spicy"){
      $('#thailand').show();
      $('#rio').hide();
      $('#todossantos').hide();
      $('#goa').hide();
      $('#preikestolen').hide();
      $('#stmoritz').hide();
      $('#machupicchu').hide();

    }
  });
});
