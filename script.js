/*global $ */
$(document).ready(function () {
    $("#search-btn").click(function(){
  var title = '';
  title = $("#sr-text").prop('value');
  console.log(title);
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+title+'&limit=5&namespace=0&format=json&callback=?', function(json){
    /*for (var i = 1; i < json.length; i--) {
        Things[i]
    }*/
    console.log(typeof json);
    console.log(json);
    var oLength = Object.keys(json).length;
    console.log(oLength);
    var html = '';
    for (var i = 0; i < oLength; i++) {
        for (var j = 1; j < oLength; j++) {
            console.log(json[j][i]);
            html += json[j][i] + ' <br> ';
            console.log(html);
        }
        $("div.search").html(html);
        /*$("div.search").click(function(){
                $("div.search").html(html);
        });*/
    }
});
  });
    
});
