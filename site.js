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
  $('html').append("Thanks for signing up!")
}
});
