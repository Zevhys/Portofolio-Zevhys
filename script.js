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

// Function to handle form submission
function onFormSubmit(e) {
  e.preventDefault();
  const email = $("#inp_email");
  const subject = $("#inp_subject");
  const message = $("#inp_message");

  if (!email.val()) {
    alert("Email is required");
  } else if (!subject.val()) {
    alert("Subject is required");
  } else if (!message.val()) {
    alert("Message is required");
  } else {
    alert("Form Submitted");
    email.val("");
    subject.val("");
    message.val("");
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
  .type("Informatics Engineering Student", { delay: 2000 })
  .delete()
  .type("Tech Enthusiast", { delay: 2000 })
  .go();

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoHeight: true,
  autoplay: {
    delay: 1500,
  },

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
