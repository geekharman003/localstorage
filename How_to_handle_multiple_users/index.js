// Write your code below:
function handleFormSubmit(event) {
  const ul = document.querySelector("ul");
  event.preventDefault();

  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username: username,
    email: email,
    phone: phone,
  };

  localStorage.setItem(email, JSON.stringify(obj));

  const newLi = document.createElement("li");
  newLi.textContent = `${obj.username} ${obj.email} ${obj.phone}`;
  ul.appendChild(newLi);
}

module.exports = handleFormSubmit;
