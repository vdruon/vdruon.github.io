$(document).ready(function() {

  function sendMail(text) {
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'Ld4UoxMJBAqYJ9x9lc3qfg',
        'message': {
          'from_email': 'valentin.druon@gmail.com',
          'to': [
              {
                'email': 'valentin.druon@gmail.com',
                'name': 'Valentin DRUON',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Mail from Constance',
          'html': 'Constance dit : ' + text
        }
      }
     }).done(function(response) {
        $(".button-group").html("Tu viens de m'envoyer un message qui dit : " + text);
     });
  }

  $("#btn-love").on('click', function() {
    sendMail("Je t'aime.");
  });

  $("#btn-hate").on('click', function() {
    sendMail("Je te d&eacute;teste.");
  });

  $("#btn-come").on('click', function() {
    sendMail("Reviens.");
  });

  $("#btn-go").on('click', function() {
    sendMail("D&eacute;gage.");
  });

});