const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const serviceInput = document.getElementById("service");

const buttons = document.querySelectorAll(".book-now");

// OPEN MODAL
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    serviceInput.value = btn.dataset.service;
    modal.style.display = "flex";
  });
});

// CLOSE MODAL
closeModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// WHATSAPP SEND
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const datetime = document.getElementById("datetime").value;

  const number = "254745723795"; // CHANGE TO YOUR NUMBER

  const message =
`Hello, I would like to book an appointment:

Name: ${name}
Phone: ${phone}
Service: ${service}
Date & Time: ${datetime}`;

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});



     // mobile nav
    const btnHamb = document.getElementById('btnHamburger');
    const mobileNav = document.getElementById('mobileNav');
    btnHamb.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
      btnHamb.classList.toggle('open');
      mobileNav.setAttribute('aria-hidden', !mobileNav.classList.contains('show'));
    });
