document.addEventListener("DOMContentLoaded", initialize);

const ul = document.querySelector("ul");

// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const usersList = JSON.parse(localStorage.getItem("usersList") || []);

  for (let i = 0; i < usersList.length; i++) {
    display(usersList[i]);
  }
}

// add new users in usersList array
function handleFormSubmit(event) {
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username: username,
    email: email,
    phone: phone,
  };

  const id = Date.now();
  obj.id = id;

  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];

  usersList.push(obj);

  localStorage.setItem("usersList", JSON.stringify(usersList));
}

// use this function to display user on screen
function display(user) {
  const newLi = document.createElement("li");
  newLi.textContent = `${user.username} ${user.email} ${user.phone}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    deleteData(user.id, newLi);
  });
  newLi.appendChild(deleteBtn);
  ul.appendChild(newLi);
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
  const users = JSON.parse(localStorage.getItem("usersList"));

  const newUsersList = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].id != id) {
      newUsersList.push(users[i]);
    }
  }

  localStorage.setItem("usersList", JSON.stringify(newUsersList));
  li.remove();
}

module.exports = handleFormSubmit;
