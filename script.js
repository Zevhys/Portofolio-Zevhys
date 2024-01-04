const email = $("#inp_email");
const subject = $("#inp_subject");
const message = $("#inp_message");

// Function to handle form submission
function onFormSubmit(e) {
  e.preventDefault();

  if (!$(email).val()) {
    alert("Email is required");
  } else if (!$(subject).val()) {
    alert("Subject is required");
  } else if (!$(message).val()) {
    alert("Message is required");
  } else {
    alert("Form Submitted");
    // $(email).val("");
    // $(subject).val("");
    // $(message).val("");
  }
}

// Spread Sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycby7JkuVn04VE-Dla5Jrekzzi6MMulPmqCqBHzIXInkT_u9MRjfPPkmbqhC81Gu7SFUuXA/exec";
const form = document.forms["zevhys-contact-form"];
const btn_submit = $("#btn-submit")[0];
const submitted_spinner = $("#submitted-spinner")[0];
const submitted_text = $("#submitted-text")[0];

console.log(btn_submit);

function btn_submit_restore() {
  btn_submit.disabled = false;
  submitted_text.textContent = "Submit";
  submitted_spinner.classList.toggle("hidden");
}

form.addEventListener("submit", (e) => {
  btn_submit.disabled = true;
  submitted_text.textContent = "Submitting";
  submitted_spinner.classList.toggle("hidden");
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(function (response) {
      btn_submit_restore();
      alert("Form Submitted");
    })
    .catch(function (error) {
      btn_submit_restore();
      alert(`An error occured: \n ${error}`);
    });
});

// Function to handle form submission

function onFormSubmit(e) {
  e.preventDefault();

  if (!email.val()) {
    alert("Email is required");
  } else if (!subject.val()) {
    alert("Subject is required");
  } else if (!message.val()) {
    alert("Message is required");
  } else {
    // email.val("");
    // subject.val("");
    // message.val("");
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

$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

form.reset();

AOS.init();
