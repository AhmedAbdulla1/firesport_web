"use strict";
import { addUser } from "./firebase.js";
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const gmailInput = document.getElementById("gmail");

const nameError = document.getElementById("name-error");
const ageError = document.getElementById("age-error");
const phoneError = document.getElementById("phone-error");
const gmailError = document.getElementById("gmail-error");

nameInput.addEventListener("input", () => {
  const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]+$/;
  if (!nameRegex.test(nameInput.value) || nameInput.value.length < 7) {
    nameError.textContent =
      "الاسم يجب أن يتكون من أحرف عربية أو إنجليزية فقط  وعلى الأقل 7 حرفًا";
    nameInput.classList.remove("is-valid");
  } else {
    nameError.textContent = "";
    nameInput.classList.add("is-valid");
  }
});

ageInput.addEventListener("input", () => {
  const age = parseInt(ageInput.value);
  if (isNaN(age) || age < 12 || age > 80) {
    ageError.textContent = "السن يجب أن يكون بين 12 و 80.";
    ageInput.classList.remove("is-valid");
  } else {
    ageError.textContent = "";
    ageInput.classList.add("is-valid");
  }
});

phoneInput.addEventListener("input", () => {
  const phoneRegex = /^[+]?(0|20)?\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent =
      "استخدم رقم هاتف صالح (10 أرقام لا تبدأ بـ 0 أو 11 رقم يبدأ بـ 0 ).";
    phoneInput.classList.remove("is-valid");
  } else {
    phoneError.textContent = "";
    phoneInput.classList.add("is-valid");
  }
});

gmailInput.addEventListener("input", () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(gmailInput.value)) {
    gmailError.textContent = "البريد الإلكتروني يجب أن يكون بتنسيق صحيح.";
    gmailInput.classList.remove("is-valid");
  } else {
    gmailError.textContent = "";
    gmailInput.classList.add("is-valid");
  }
});
function collectFormData() {
  const data = {};
  data.name = nameInput.value;
  data.age = ageInput.value;
  data.phone = phoneInput.value;
  data.gmail = gmailInput.value;
  return data;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (
    nameError.textContent ||
    ageError.textContent ||
    phoneError.textContent ||
    gmailError.textContent
  ) {
    Swal.fire({
      // SweetAlert for errors
      icon: "error",
      title: "خطأ",
      text: "الرجاء تصحيح الأخطاء في الحقول.",
    });
    return;
  }

  const formData = collectFormData(form);
  console.log(formData);
  addUser(formData);
  Swal.fire({
    // SweetAlert for success
    icon: "success",
    title: "نجاح",
    text: "تم تسجيل طلب العضوية بنجاح !",
  }).then(() => {
    // Reset the form after successful submission
    window.location.href = "index.html"; // Redirect to new_page.html
  });
});
