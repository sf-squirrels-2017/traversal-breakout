$(document).ready(function(){

  $("#blue").on("click", function(){
    var property = $(this).parent().siblings(":first").text();
    var value = $(this).parent().prev().text();
    $(this).closest("tr").children().css(property, value);
  });


  $("tbody > tr:nth-child(2) button").on("click", function(){
    var property = $(this).parent().siblings(":first").text();
    var value = $(this).parent().prev().text();
    $(this).closest("tbody").children(":first").css(property, value);
  });

  $("#stuff > h2").on("mouseover", function(){

    $(this).next().find(".list:first").css("font-weight", "bold");
  })
});


