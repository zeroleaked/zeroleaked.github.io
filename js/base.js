$(function(){
  $('#id_username').attr("placeholder", "username");
  $('#id_password').attr("placeholder", "password");

  $('nav>form').hide();
  $('nav label').hide();

  $('.login-button').click(() => {
    $('nav #login-form').toggle();
  })
  $('.user-button').click(() => {
    $('nav .logout-link').toggle();
  })
});
