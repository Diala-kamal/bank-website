"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const header = document.querySelector("header");
const allSections = document.querySelectorAll(".section");

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");

//CREATING AND INSERTING ELEMENTS ================== cookies inserting ====================
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'we use cookies to improve fuctionality and analytics <button class="btn btn--close-cookie">Got it </button>"';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));
//header.before(message);
//header.after(message);

//DELETING ELEMENTS =================== cookies meesage remove=====================
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });
