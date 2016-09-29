$(document).ready(function () {
  var title = '';
  title = $("#sr-text").prop('value');
  console.log(title);
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search=Robot&limit=2&namespace=0&format=json&callback=?', function(json){
    console.log(json);

  });
});
