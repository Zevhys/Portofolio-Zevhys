// Function to toggle additional details in the About section
function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).parents(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();
}

// Function to handle form submission
function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const subject = $("#inp_subject");
  const message = $("#inp_message");

  if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(subject).val()) {
    alert("Subject is required");
  } else if (!$(message).val()) {
    alert("Message is required");
  } else {
    alert("Form Submitted");
    $(email).val("");
    $(subject).val("");
    $(message).val("");
  }
}

// script.js

// Function to toggle additional details in the About section
function toggleDetail(e) {
  const target = $(e.target);

  if ($(target).hasClass("active")) {
    $(target).html("More Info").removeClass("active");
  } else {
    $(target).html("Less Info").addClass("active");
  }

  const item = $(target).closest(".about-exp-item");
  const detail = $(item).children(".about-exp-item-detail");
  $(detail).slideToggle();
}

// Function to handle form submission
function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const subject = $("#inp_subject");
  const message = $("#inp_message");

  if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(subject).val()) {
    alert("Subject is required");
  } else if (!$(message).val()) {
    alert("Message is required");
  } else {
    alert("Form Submitted");
    $(email).val("");
    $(subject).val("");
    $(message).val("");
  }
}

// Close the navbar when clicking outside of it
document.addEventListener("click", function (e) {
  const navbar = $(".navbar-collapse");
  if (!navbar.is(e.target) && navbar.has(e.target).length === 0) {
    navbar.collapse("hide");
  }
});

$(document).ready(function () {
  setTimeout(function () {
    $(".profile").addClass("show");
  }, 100);
});

new TypeIt("#identity", {
  loop: true,
})
  .type("Front End Web Developer", { delay: 2000 })
  .delete()
  .type("Student Informatics Engineering", { delay: 2000 })
  .delete()
  .type("Tech Enthusiast", { delay: 2000 })
  .go();
