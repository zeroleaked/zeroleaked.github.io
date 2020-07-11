$(function() {
    // Code here
    $.fn.serializeObject = function() {
       var o = {};
       var a = this.serializeArray();
       $.each(a, function() {
           if (o[this.name]) {
               if (!o[this.name].push) {
                   o[this.name] = [o[this.name]];
               }
               o[this.name].push(this.value || '');
           } else {
               o[this.name] = this.value || '';
           }
       });
       return o;
    };


    // second form
    const first_inputs = [
      {
        "name":"NIK",
        "placeholder":"Nomor Induk Kependudukan Target",
        "width":"75%",
        "type":"number",
      },
      {
        "name":"Jenis Kelamin",
        "placeholder":"L / P",
        "width":"20%",
        "type":"text",
      },
      {
        "name":"Nama Lengkap",
        "placeholder":"Nama Lengkap Target",
        "width":"100%",
        "type":"text",
      },
      {
        "name":"Alamat Rumah",
        "placeholder":"Alamat Rumah Target",
        "width":"100%",
        "type":"text",
      },
      {
        "name":"RT",
        "placeholder":"RT",
        "width":"15%",
        "type":"number",
      },
      {
        "name":"RW",
        "placeholder":"RW",
        "width":"15%",
        "type":"number",
      },
      {
        "name":"Desa",
        "placeholder":"Desa",
        "width":"60%",
        "type":"text",
      },
      {
        "name":"Kelurahan",
        "placeholder":"Kelurahan",
        "width":"47.5%",
        "type":"text",
      },
      {
        "name":"Kecamatan",
        "placeholder":"Kecamatan",
        "width":"47.5%",
        "type":"text",
      },
      {
        "name":"Kabupaten Kota",
        "placeholder":"Kabupaten / Kota",
        "width":"100%",
        "type":"text",
      },
      {
        "name":"Provinsi",
        "placeholder":"Provinsi",
        "width":"100%",
        "type":"text",
      }
    ];

    for (input of first_inputs) {
      $('#second-form').append($('<input/>', {
          name: input.name,
          id: 'some-id',
          placeholder: input.placeholder,
          type: input.type,
      }).css("width", input.width));

    }


    $('#second-form').append($('<button/>', {
        id: 'back2',
        class: 'back'
    }).append('<span>&larr;</span>'))

    $('#second-form').append($('<button/>', {
        id: 'next2',
        class: 'next'
    }).append('Berikutnya'))

    // form dynamics

    // jQuery('ul.textMenu a').removeClass('active');

    $('#next1').on('click', function(e) {
      e.preventDefault();
      $('#first-form').hide();
      $('.dot#first').removeClass('active');
      $('.dot#first img').hide();
      $('#second-form').show();
      $('.dot#second').addClass('active');
      $('.dot#second img').show();
    })

    $('#back2').on('click', function(e) {
      e.preventDefault();
      $('#second-form').hide();
      $('.dot#second').removeClass('active');
      $('.dot#second img').hide();
      $('#first-form').show();
      $('.dot#first').addClass('active');
      $('.dot#first img').show();
    })
    // $('.dot#second').addClass('active');
    // $('.dot#second img').show();

    $('#next2').on('click', function(e) {
      e.preventDefault();
      $('#second-form').hide();
      $('.dot#second').removeClass('active');
      $('.dot#second img').hide();
      $('#third-form').show();
      $('.dot#third').addClass('active');
      $('.dot#third img').show();
    })

    $('#back3').on('click', function(e) {
      e.preventDefault();
      $('#third-form').hide();
      $('.dot#third').removeClass('active');
      $('.dot#third img').hide();
      $('#second-form').show();
      $('.dot#second').addClass('active');
      $('.dot#second img').show();
    })

    $('#third-form').append($('<button/>', {
        type: 'submit',
        id: 'submit-form',
    }).append('KIRIM'))

    // $('button#submit-form').before('<input></input>').attr("type", "date");;

    var $form = $('form#main-form'),
        url = 'https://script.google.com/macros/s/AKfycbylNxr_8AIKhThr77Ol0jJ-dg0yeIrJiuMlE52Rh6wJTqfLSOeL/exec'

    const checkboxes = ['Buta Huruf', 'Keterampilan', 'Kesehatan', 'Kekurangan Modal'];
    $('#submit-form').on('click', function(e) {
      e.preventDefault();
      $('#submitting').slideDown();
      const result = $form.serializeObject();
      for (cb of checkboxes) {
        if (result[cb]) {
          result[cb] = 1;
        } else {
          result[cb] = 0;
        }
      };
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: result,
        success: () => {
          console.log('success!');
          // $("#main-form").trigger('reset');
          $('.success').fadeIn();
        }
      });
    })

});
