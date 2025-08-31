// Dark mode toggle
function initThemeToggle() {
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "theme-toggle";
  toggleBtn.innerHTML = "🌙";
  toggleBtn.className =
    "fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-full text-gray-800 dark:text-gray-200 shadow-lg z-50";
  document.body.appendChild(toggleBtn);

  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.body.classList.add("dark");
    toggleBtn.innerHTML = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      toggleBtn.innerHTML = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.innerHTML = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
}

// Certificates modal
function initCertificatesModal() {
  const certModal = document.getElementById("certModal");
  const modalImg = document.getElementById("modalImg");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".certificate").forEach((img) => {
    img.addEventListener("click", () => {
      certModal.classList.remove("hidden");
      modalImg.src = img.src;
    });
  });

  closeModal.addEventListener("click", () => {
    certModal.classList.add("hidden");
  });

  certModal.addEventListener("click", (e) => {
    if (e.target.id === "certModal") {
      certModal.classList.add("hidden");
    }
  });
}

// Set active nav link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
}

// Initialize functions when the page loads
document.addEventListener("DOMContentLoaded", function() {
  initThemeToggle();
  initCertificatesModal();
  setActiveNavLink();
});
