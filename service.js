const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const user = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };
  console.log("the user is:", user);
});
