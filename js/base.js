$(function(){
  //jquerys
  $('#id_username').attr("placeholder", "username");
  $('#id_password').attr("placeholder", "password");

  $('.login-button').click(() => {
    $('nav #login-form').toggle();
  })
  $('.user-button').click(() => {
    $('nav .logout-link').toggle();
  })
});
