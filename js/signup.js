$(function(){
    //jquerys
    $('#id_username').attr("placeholder", "username");
    $('#id_password1').attr("placeholder", "password");
    $('#id_password2').attr("placeholder", "confirm");
  
    $('label').hide();
    $(".helptext").hide();

    $('#id_username').after('<div class="username_helper">?</div>');
    $('.username_helper').click(() => {
        $(".helptext:eq(0)").toggle();
    })

    $('#id_password1').after('<div class="password_helper">?</div>');
    $('.password_helper').click(() => {
        $(".helptext:eq(1)").toggle();
    })

    $('.login-button').click(() => {
      $('nav #login-form').toggle();
    })
    $('.user-button').click(() => {
      $('nav .logout-link').toggle();
    })
  });
  