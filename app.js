

var searchTermVar;
var beginDateVar;
var endDateVar;
var numberVar;

$(document).ready(function() {

  $("#submiutButtonId").on("click", function() {
     searchTermVar = $("#inputFieldId").val();
     numberVar = $("#numberField").val();
     beginDateVar = $("#beginDateInput").val();
     endDateVar = $ ("#endDateInput").val();


     var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
     url += '?' + $.param({
       'api-key': "207e344cc13d489b8b21789da5a03a25",
       'q': searchTermVar
     });
     $.ajax({
       url: url,
       method: 'GET',
     }).done(function(result) {
       console.log(result);
     }).fail(function(err) {
       throw err;
     });

  });



});
