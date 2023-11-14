//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;

  const message = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;
  
  alert(message);
});