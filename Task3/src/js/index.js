function display() {
  var body = "";
  var name = document.getElementById("name").value;
  var body = body.concat("Name: " + name + "\n");
  var email = document.getElementById("email").value;
  var body = body.concat("Email: " + email + "\n");
  var password = document.getElementById("password").value;
  var body = body.concat("Password: " + password + "\n");

  var data1 = document.getElementById("maths").checked;
  var data2 = document.getElementById("science").checked;
  var data3 = document.getElementById("Literature").checked;
  console.log(data1, data2, data3);
  if (data1) {
    var body = body.concat(
      "Subject Selected: " + document.getElementById("maths").value + "\n"
    );
  }
  if (data2) {
    var body = body.concat(
      "Subject Selected: " + document.getElementById("science").value + "\n"
    );
  }
  if (data3) {
    var body = body.concat(
      "Subject Selected: " + document.getElementById("Literature").value + "\n"
    );
  }
  var drop = document.getElementById("degree").value;
  var body = body.concat("Degree: " + drop + "\n");
  alert(body);
}
