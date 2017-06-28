emailjs.init("user_MOJnKnOPCqvRmQvDWuz8s");

$(function() {

  $('.submitbtn').on('click', function(event) {
    event.preventDefault()

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#phoneNumber').val();
    var email = $('#email').val();
    var serviceRequested = $('#serviceRequested').val();
    var name = firstName + ' ' + lastName;

    var obj = {}
    obj.to_name = name
    obj.from_name = name
    obj["phone_number"] = phoneNumber
    obj.email = email
    obj["services_requested"] = serviceRequested

    var postObj = {}
    postObj.name = name
    postObj.email = email
    postObj["phone_number"] = phoneNumber
    postObj["services_requested"] = serviceRequested

    console.log(obj);
    emailjs.send("danmickulesku_gmail_com", "template_u36WH5zW", obj);

    $.post("https://cors-anywhere.herokuapp.com/https://guarded-dawn-58914.herokuapp.com/api/v1/clients/", postObj)
      .then(function() {


      })
  })



  // Initialize modal
  $('.modal').modal(

  );
});
