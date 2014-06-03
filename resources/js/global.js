$(document).ready(function(){
  $.localScroll();

  $("#input-submit").click(function(){
    if(validateMail($("#input-mail").val()) && isNotEmpty($("#input-message").val()))
    {
      send();
      $("#form-container").html("Your mail has successfully been sent. I will reply you as soon as possible :)");
    }
  });
});

function validateMail(mail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function validatePhone(phone) {
  var re = /^\+[0-9]+$/;
  return re.test(phone);
}

function isNotEmpty(text)
{
  if(text == undefined || text == "")
    return false
  return true;
}

function colorInput(boolean, control) {
  if(boolean === true) {
    $(control).addClass('valid');
    $(control).removeClass('invalid');
  } else {
    $(control).addClass('invalid');
    $(control).removeClass('valid');
  }
}

function send() {

  var from = $("#input-mail").val();
  var phone = $("#input-phone").val();
  var message = $("#input-message").val();

  var data = {
    "key": "Ld4UoxMJBAqYJ9x9lc3qfg",
    "message": {
        "html": "Message from : " + from + " , phone number : " + phone + "<br/>" + message,
        "subject": "Contact from online resume",
        "from_email": from,
        "from_name": from,
        "to": [{
            "email": "valentin.druon@viacesi.fr",
            "name": "Valentin DRUON"
        }]
    },
    "async": true
  };

  $.ajax({
      type: "POST",
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: data
  });
}