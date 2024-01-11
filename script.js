// Spread Sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycby7JkuVn04VE-Dla5Jrekzzi6MMulPmqCqBHzIXInkT_u9MRjfPPkmbqhC81Gu7SFUuXA/exec";
const form = document.forms["zevhys-contact-form"];
const btn_submit = $("#btn-submit")[0];
const submitted_spinner = $("#submitted-spinner")[0];
const submitted_text = $("#submitted-text")[0];

console.log(btn_submit);

// Submit Form
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
      Swal.fire({
        position: "center",
        icon: "success",
        text: "Your message has been sent",
        title: "Form Submitted!",
        showConfirmButton: true,
      });
      form.reset();
    })
    .catch(function (error) {
      btn_submit_restore();
      Swal.fire({
        position: "center",
        icon: "error",
        title: "An error occured",
        text: `${error}`,
        showConfirmButton: true,
      });
    });
});

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
