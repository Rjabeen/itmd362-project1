
$('html').removeClass('no-js').addClass('js');
$('#contactInfo-form').on('submit' ,
function(e) {

  e.preventDefault();

  while($('#problem').length != 0)
  {
    $('#problem').remove();
  }


   var email = $('#email').val();
   var phone = $('#phone').val();
   var name = $('#name').val();

   var validE = /.+@.+\..+/g^[^\s@]+@[^\s@]+$/
   var validP = /.+\d.+/g

   var validemail = validE.test(email);
   var validphone = validP.test(phone);
   var validbirthday = false;



   if(!validemail){
     console.log('Invalid email');
     // alert("The email you entered was invalid");

     $('#email').parent().append("<p id='problem'>Email is invalid!</p>")

   }

   if(!validphone){
     console.log('Invalid phone');
     // alert("The phone # you entered was invalid");

     $('#phone').parent().append("<p id='problem'>phone number is invalid!</p>")

   }
   else {
     console.log('Valid Phone');
     validator.phone = true;
   }

   if(!validbirthday){
     console.log('Invalid birthday');
     // alert("The phone # you entered was invalid");

     $('#birthday').parent().append("<p id='problem'>birthday is invalid!</p>")

   }


   else {
      console.log('Valid email');
      $('body').replaceWith('<h1 id="submission"> Thank you ' + name + '  for signing up .</h1>');
    }


});




/*
$('document').ready(function() {
  console.log("Document is ready")
});

$("#contactInfo-form").on('submit', function(e) {
  e.preventDefault();

  let valid = true;
 var name = $('#name').val();
if($('#email').val().indexOf('@')!==-1)
{
  alert('Thank you')
}
else {
  valid = false;
  alert('Please make sure you have @ in your email id')
}

  if(valid)
  {
  $('html').append("Thanks for signing up!  " + name)
}
});*/
