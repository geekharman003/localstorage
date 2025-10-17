function handleFormSubmit(event) {
  const users = document.querySelector("#users");
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  //setting in local storage
  const obj = {
    username: username,
    email: email,
    phone: phone,
  };

  localStorage.setItem(email, JSON.stringify(obj));

  //creating a new li element
  const newLi = document.createElement("li");
  newLi.textContent = `${username} - ${email} - ${phone}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function (event) {
    localStorage.removeItem(email);
    newLi.remove();
  });

  newLi.appendChild(deleteBtn);
  users.appendChild(newLi);
}

module.exports = handleFormSubmit;
