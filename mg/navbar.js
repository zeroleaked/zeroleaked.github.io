$(function(){
  $('#account-toggle').click(() => {
    $('nav #overlay').slideDown(150);
  })
  $('.exit-overlay, .bar').click(() => {
    $('nav #overlay').slideUp(150);
  })
});
