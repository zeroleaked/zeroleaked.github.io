$(function(){

  $(".box").hide();
  $(".label").click(function(){
    $(this).parent().find(".box").toggle()
  });

});
