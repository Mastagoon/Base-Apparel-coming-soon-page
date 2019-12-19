function myFunction(event) {
  event.preventDefault();
  let email = document.querySelector("#email").value;
  if (email == "") {
    document.querySelector(".feedback").innerHTML =
      "Please enter your email adress";
    document.querySelector("#email").classList.add("error");
  } else if (!validateEmail(email)) {
    document.querySelector(".feedback").innerHTML =
      "Please provide a valid email adress";
    document.querySelector("#email").classList.add("error");
  } else {
    document.querySelector(".feedback").innerHTML =
      "You have been subscribed successfully !";
    document.querySelector(".feedback").classList.add("success");
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
