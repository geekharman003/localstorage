document.addEventListener("DOMContentLoaded", initialize);
const ul = document.querySelector("ul");
// Don't remove anything just complete the functions

// When the page get load display all users
function initialize() {
  const users = JSON.parse(localStorage.getItem("usersList")) || [];

  for (let i = 0; i < users.length; i++) {
    display(users[i]);
  }
}

// add new users in usersList array
function handleFormSubmit(event) {
  const btn = document.querySelector("button[type='submit']");
  event.preventDefault();
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    username,
    email,
    phone,
  };

  addData(obj);
}

// use this function to display user on screen
function display(user) {
  const newLi = document.createElement("li");
  newLi.textContent = `${user.username} ${user.email} ${user.phone}`;
  newLi.id = user.id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    deleteData(user.id, newLi);
  });
  newLi.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    editData(user.id);
  });
  newLi.appendChild(editBtn);

  ul.appendChild(newLi);
}

// use this function to add user details into local storage
function addData(obj) {
  const id = Date.now();
  obj.id = id;
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  usersList.push(obj);
  localStorage.setItem("usersList", JSON.stringify(usersList));
}

// use this function to delete the user details from local store and DOM (screen)
function deleteData(id, li) {
  const usersList = JSON.parse(localStorage.getItem("usersList") || []);

  const updatedList = [];

  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].id !== id) {
      updatedList.push(usersList[i]);
    }
  }

  localStorage.setItem("usersList", JSON.stringify(updatedList));
  li.remove();
}

// use this function to update user details from local storage
function editData(id) {
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.textContent = "Update";
  const usersList = JSON.parse(localStorage.getItem("usersList") || []);

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].id === id) {
      usernameInput.value = usersList[i].username;
      emailInput.value = usersList[i].email;
      phoneInput.value = usersList[i].phone;
    }
  }
}

module.exports = handleFormSubmit;
