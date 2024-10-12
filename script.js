"use strict";

const mainCard = document.querySelector(".main-card");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submit");
const customerEmail = document.querySelector(".email__customer");
const successCard = document.querySelector(".success-card");
const errormsg = document.querySelector(".errormsg");
const dismissBtn = document.querySelector(".dismiss-btn");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

submitBtn.addEventListener("click", function (e) {
  const emailValue = input.value;
  e.preventDefault();
  if (emailPattern.test(emailValue)) {
    mainCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    customerEmail.textContent = emailValue;
  } else {
    errormsg.classList.remove("hidden");
    input.classList.add("error-active");
  }
});

dismissBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // window.location.reload();
  mainCard.classList.remove("hidden");
  successCard.classList.add("hidden");
  errormsg.classList.add("hidden");
  input.classList.remove("error-active");
  input.value = "";
});
