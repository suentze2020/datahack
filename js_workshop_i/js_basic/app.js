document.getElementById('submitBtn').addEventListener('click', sayHello);

function sayHello() {
         var username = document.forms[0].username.value;
         var password = document.forms[0].pwd.value;
         if (username == '') {alert('username cannot be blank!')};
         if (password == '') {alert('password cannot be blank!')};
         if (username !== '' && password !== '') {
            alert("Hello " + username + "! Your password is " + password + '.');
            var answer = "Hello " + username + "! Your password is " + password + '.';
            document.getElementById('answer').innerHTML = answer;
         }
}

function compute_x_plus_y(x,y) {
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  z = x + y;
  return z;
}

function ask_for_x_n_y() {
  var x = prompt("Enter x value");
  var y = prompt("Enter y value");
  var z = compute_x_plus_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}

function ask_xy() {
  var x = document.getElementById("1st_num").value;
  var y = document.getElementById("2nd_num").value;
  var z = compute_x_plus_y(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
  document.getElementById("demo").innerHTML = "The answer is " + z;
}

function show_topic() {
  var x = document.getElementById("welcome");
  x.style.fontSize = "25px";
  x.style.color = "red";
}

