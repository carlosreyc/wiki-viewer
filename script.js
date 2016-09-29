/*global $ */
$(document).ready(function () {
	$("#search-btn").click(function(){
  var title = '';
  title = $("#sr-text").prop('value');
  console.log(title);
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+title+'&limit=5&namespace=0&format=json&callback=?', function(json){
    console.log(json);
    $("#sr-1").click(function(){
    	$("#sr-1").attr("href", json[3][0])
    });
    $("#sr-1").html(json[1][0] + "<br>" +json[2][0]);

    $("#sr-2").click(function(){
    	$("#sr-2").attr("href", json[3][1])
    });
    $("#sr-2").html(json[1][1] + "<br>" +json[2][1]);

    $("#sr-3").click(function(){
    	$("#sr-3").attr("href", json[3][2])
    });
    $("#sr-3").html(json[1][2] + "<br>" +json[2][2]);
    $("#sr-4").click(function(){
    	$("#sr-4").attr("href", json[3][3])
    });
    $("#sr-4").html(json[1][3] + "<br>" +json[2][3]);
    $("#sr-5").click(function(){
    	$("#sr-5").attr("href", json[3][4])
    });
    $("#sr-5").html(json[1][4] + "<br>" +json[2][4]);

});
  });
    
});
