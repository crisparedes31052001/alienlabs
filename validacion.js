$(document).ready(function() {
    $('#login-button').click(function(e) {
      e.preventDefault();
      var password = $('#password').val();
      if(password.length < 10) {
        alert('La contraseña no debe tener menos de 10 caracteres.');
      } else {
        window.location.href='home.html';
      }
    });
  });
  

  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted normally
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Save the user's email and password to localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  
    alert('Registration successful!');
  });
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted normally
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Retrieve the user's email and password from localStorage
    var registeredEmail = localStorage.getItem('email');
    var registeredPassword = localStorage.getItem('password');
  
    if (email === registeredEmail && password === registeredPassword) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password.');
    }
  });