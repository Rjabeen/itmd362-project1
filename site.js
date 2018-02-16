
$('html').removeClass('no-js').addClass('js');
$('#contactInfo-form').on('submit' ,
function(e) {
   var email = $('#email').val();
   var valid = /.+@.+\..+/g;
   var validemail = valid.test(email);
   var name = $('#name').val();
   e.preventDefault();
   if(!validemail){
     console.log('Invalid email');
     alert("The email you entered was invalid");
     return false;
   }
   else {
      console.log('Valid email');
      $('body').replaceWith('<h1 id="submission"> Thank you ' + name + '!  your sign up has been completed.</h1>');
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
