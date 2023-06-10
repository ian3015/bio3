document.addEventListener("DOMContentLoaded", function () {
  const contatoBtn = document.getElementById("contatoBtn");
  const fecharBtn = document.getElementById("fecharBtn");
  const contactInfo = document.querySelector(".contact-info");

  contatoBtn.addEventListener("click", function () {
    contactInfo.style.display = "block";
  });

  fecharBtn.addEventListener("click", function () {
    contactInfo.style.display = "none";
  });
});

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', function() {
  document.body.classList.toggle('menu-open');
});
