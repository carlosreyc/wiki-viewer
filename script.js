/*global $ */
$(document).ready(function () {
        $("div.link").hide();
    $("#search-btn").click(function(){

  title = $("#sr-text").prop('value');
  console.log(title);
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+title+'&limit=5&namespace=0&format=json&callback=?', function(json){
    console.log(json)
    console.log(Object.keys(json[1]).length);


        switch(Object.keys(json[1]).length) {
            case 1:
                $("#div1").show();   
                $("#div1").html(json[1][0] + '<br>' +json[2][0] + '<br>' );
                $("#div1").click(function(){
                $("#a1").attr("href",json[3][0]);
                });
                
                break;
           
            case 2 :
                $("#div1, #div2").show();
                $("#div1").html(json[1][0] + '<br>' +json[2][0] + '<br>' );
                $("#div1").click(function(){
                $("#a1").attr("href",json[3][0]);
                });
                $("#div2").html(json[1][1] + '<br>' +json[2][1] + '<br>' );
                $("#div2").click(function(){
                $("#a2").attr("href",json[3][1]);
                });
                break;
            case 3 :
                $("#div1,#div2,#div3").show();
                $("#div1").html(json[1][0] + '<br>' +json[2][0] + '<br>' );
                $("#div1").click(function(){
                $("#a1").attr("href",json[3][0]);
                });
                $("#div2").html(json[1][1] + '<br>' +json[2][1] + '<br>' );
                $("#div2").click(function(){
                $("#a2").attr("href",json[3][1]);
                });
                $("#div3").html(json[1][2] + '<br>' +json[2][2] + '<br>' );
                $("#div3").click(function(){
                $("#a3").attr("href",json[3][2]);
                });
                break;
            case 4 :
                $("#div1, #div2, #div3, #div4").show();
                $("#div1").html(json[1][0] + '<br>' +json[2][0] + '<br>' );
                $("#div1").click(function(){
                $("#a1").attr("href",json[3][0]);
                });
                $("#div2").html(json[1][1] + '<br>' +json[2][1] + '<br>' );
                $("#div2").click(function(){
                $("#a2").attr("href",json[3][1]);
                });
                $("#div3").html(json[1][2] + '<br>' +json[2][2] + '<br>' );
                $("#div3").click(function(){
                $("#a3").attr("href",json[3][2]);
                });
                $("#div4").html(json[1][3] + '<br>' +json[2][3] + '<br>' );
                $("#div4").click(function(){
                $("#a4").attr("href",json[3][3]);
                });
                break;
            case 5 :

                $("div.link").show();
                $("#div1").html(json[1][0] + '<br>' +json[2][0] + '<br>' );
                $("#div1").click(function(){
                $("#a1").attr("href",json[3][0]);
                });
                $("#div2").html(json[1][1] + '<br>' +json[2][1] + '<br>' );
                $("#div2").click(function(){
                $("#a2").attr("href",json[3][1]);
                });
                $("#div3").html(json[1][2] + '<br>' +json[2][2] + '<br>' );
                $("#div3").click(function(){
                $("#a3").attr("href",json[3][2]);
                });
                $("#div4").html(json[1][3] + '<br>' +json[2][3] + '<br>' );
                $("#div4").click(function(){
                $("#a4").attr("href",json[3][3]);
                });
                $("#div5").html(json[1][4] + '<br>' +json[2][4] + '<br>' );
                $("#div5").click(function(){
                $("#a5").attr("href",json[3][4]);
                });
                break;
            }



        
    
});
  });
    $("#sr-text").keyup(function(e){
        if(e.which == 13) {
            $("#search-btn").trigger('click');
        }
    });
});
