<!DOCTYPE html>
<html>
<head>
<title>Test Form</title>

<script>
function showInput() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // convert to capital letters
    username = username.toUpperCase();
    password = password.toUpperCase();

    // show result under the form
    document.getElementById("result").innerHTML =
        "USERNAME: " + username + "<br>" +
        "PASSWORD: " + password;

}
</script>

</head>

<body>

<h2>Test Form</h2>

Username:
<input type="text" id="username"><br><br>

Password:
<input type="password" id="password"><br><br>

<button onclick="showInput()">Submit</button>

<br><br>

<div id="result"></div>

</body>
</html>