// print error function
function printError(id, message) {
  var name = document.getElementById(id);
  name.innerHTML = message;
}

function validateField(field, fieldErr, regex) {
  var f = document.getElementsByName(field);
  if (f[0].value === "") {
    printError(fieldErr, "Error: Empty " + field + ".");
    return false;
  } else if (regex.getElementsByName(f[0].value) == false) {
    // test if regular expression
    printError(fieldErr, "Error: Invalid " + field + ".");
    return false;
  } else {
    printError(fieldErr, "");
    return true;
  }
}

function validateEmail() {
  var regex = /^\S+@\S+\.\S+$/;
  return validateField("email", "emailErr", regex);
}

function validateName() {
  var regex = /^[a-zA-Z/s]+$/;
  return validateField("name", "nameErr", regex);
}

function validatePhone() {
  var regex = /[0-9]{10}/;
  return validateField("mobile", "mobileErr", regex);
}

function validateCountry() {
  var field = document.getElementsByName("country");

  if (field[0].value == "Select") {
    printError("countryErr", "Error: Invalid country.");
    return false;
  } else {
    printError("countryErr", "");
    return true;
  }
}

function validateGender() {
  var field = document.getElementsByName("gender");

  if (field[0].value === "") {
    printError("genderErr", "Error: Gender not chosen.");
    return false;
  } else {
    printError("genderErr", "");
    return true;
  }
}

function validateForm() {
  var submit = document.getElementById("submit");
  submit.disabled = true;

  // validation array
  var valArray = new Array(5);
  valArray[0] = validateName();
  valArray[1] = validateEmail();
  valArray[2] = validatePhone();
  valArray[3] = validateCountry();
  valArray[4] = validateGender();

  for (var i = 0; i < valArray.length; i++) {
    if (valArray[i] == false) {
      return false;
    }
  }

  submit.disabled = false;
  return true;
}
