// Toggle mobile nav menu and auto-close when clicking a link
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });

    // Auto-close when a nav link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      const isClickInside = navLinks.contains(e.target) || menuToggle.contains(e.target);
      if (!isClickInside) {
        navLinks.classList.remove('show');
      }
    });
  }

  // Optional: smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});
// Inisialisasi EmailJS
(function() {
  emailjs.init("su7cTzTyjOtGMgD8D"); // ganti dengan Public Key dari EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_pi7vbdw", "template_u534tob", this)
    .then(() => {
      alert("✅ Pesan berhasil dikirim!");
      this.reset();
    }, (err) => {
      alert("❌ Gagal mengirim pesan: " + JSON.stringify(err));
    });
});