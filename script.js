// Function to show a specific section and hide others
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => section.classList.add('hidden'));

  // Show the target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }

  // Update active nav link
  setActiveNavLink(sectionId);
}

// Mobile menu toggle functionality
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('flex');
  navMenu.classList.toggle('flex-col');
  navMenu.classList.toggle('absolute');
  navMenu.classList.toggle('top-full');
  navMenu.classList.toggle('left-0');
  navMenu.classList.toggle('w-full');
  navMenu.classList.toggle('bg-white');
  navMenu.classList.toggle('shadow-md');
  navMenu.classList.toggle('z-10');

  // Toggle hamburger animation
  hamburgerBtn.classList.toggle('active');
}

// Close mobile menu
function closeMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  navMenu.classList.add('hidden');
  navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'w-full', 'bg-white', 'shadow-md', 'z-10');
  hamburgerBtn.classList.remove('active');
}

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

// Set active nav link based on sectionId
function setActiveNavLink(sectionId) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === sectionId) {
      link.classList.add('active');
    }
  });
}

// Projects modal
const projects = {
  1: {
    title: "Family Lock Box",
    tech: "HTML, CSS, JavaScript, Python, Django",
    desc:
      "Family Lock Box is a secure web application designed to help users manage and share sensitive documents safely within trusted circles. The platform allows users to register, log in, and manage their personal profiles while uploading and organizing important documents. Each profile generates a unique access code, which acts as a secure identifier. By sharing this code, users can grant their family members or friends access to view uploaded documents, ensuring that vital information can be accessed when needed.\n Beyond individual sharing, Family Lock Box introduces a collaborative feature where friends or family can join groups using shared codes. Each group is personalized for its members, making it easier to organize and share files collectively. The dedicated \"Groups\" page displays all the groups a user belongs to, creating a simple yet powerful way to connect and securely share information across trusted networks. This project highlights user authentication, secure file management, and group-based access control in a practical and user-friendly manner.",
    video:
      "https://drive.google.com/file/d/11kC_M_6aifzczF6azRxtp-RsN1z_2C8d/view?usp=drive_link",
  },
  2: {
    title: "E-commerce Shopping Website",
    tech: "Python, Django , HTML, CSS, JavaScript",
    desc:
      "E-Commerce Website is a full-featured online shopping platform for electronics that lets users register, log in, browse a rich product catalog (mobiles, TVs, laptops, and more), and apply powerful filters by price, color, and category. Shoppers can view detailed product pages, add items to the cart, and see a running subtotal with taxes included at checkout. The checkout flow collects shipping details, supports multiple saved addresses, and integrates a Razorpay test-mode payment gateway to simulate secure online payments. After confirming payment, the order summary displays a clear breakdown of items, quantities, taxes, and the final payable amount.\n On the back office side, an admin dashboard centralizes operations with tools to manage products, inventory, and orders. Admins can verify payments, mark orders as confirmed or on hold, and remove items when stock is unavailable. Useful touches include searchable and paginated product listings, recent-views on the product page, a mini-cart for quick edits, and basic order-status notifications to improve the overall shopping experience.",
    video:
      "https://drive.google.com/file/d/1VKuzAlBMJHp3cyBpr3QGC2rdpsTsqk7P/view?usp=sharing",
  },
  3: {
    title: "Excel Sheet analysis",
    tech: " React, Node.js, HTML, Tailwind, MongoDB",
    desc:
      "Excel Sheet Analysis is a data visualization and analysis tool that empowers users to work directly with CSV or Excel files. After logging in, users can upload datasets and instantly preview the data inside the application. By selecting X and Y axis columns along with a preferred chart type (bar, line, scatter, etc.), the platform generates interactive visualizations on the fly. The charts update dynamically on the right-hand side, helping users quickly uncover patterns and insights. To support reporting, each chart can be downloaded in both PDF and PNG formats for easy sharing.\nOn the administrative side, the system uses JWT-based authentication to ensure secure access and role management. Admins have the ability to manage user accounts and respond to queries submitted through the built-in contact form, making the platform both user-friendly and support-driven. This project highlights file handling, dynamic chart rendering, export functionality, and secure API authentication, creating a practical solution for individuals or organizations seeking quick data analysis without needing complex tools.",
    video:
      "https://drive.google.com/file/d/1QNF5IZX-AUH8TD4voeVIeWisXeGC1rCZ/view?usp=sharing",
  },
  4: {
    title: "Blogify(Blog WebSite)",
    tech: "React, Node.js, HTML, Tailwind, MongoDB",
    desc:
      "Blogify is a dynamic blogging platform that enables users to create, share, and engage with content in an interactive community. Registered users can log in, upload blogs with accompanying images, and explore posts shared by others. The platform supports social features like likes and comments, making it easy for users to interact with blog content. Even unregistered visitors can browse blogs publicly, ensuring open access to information, while authentication ensures that only verified users can upload or comment without issues. The inclusion of images in blogs enhances readability and gives posts a more engaging, professional look.\n the backend, Blogify includes a powerful admin panel where administrators can manage all uploaded blogs, oversee user accounts, and resolve queries submitted through the contact form. This combination of user engagement tools and administrative controls makes Blogify a complete solution for community-driven content sharing. It highlights features such as authentication, CRUD operations for blogs, multimedia integration, and robust admin management—all essential components of a modern content management system.",
    video:
      "https://drive.google.com/file/d/1yP5SlRDa1-2X8w5b_j5aHL86lzY5Deq/view?usp=sharing",
  },
  5: {
    title: "Car Sales And Service",
    tech: "HTML, CSS, JavaScript, PHP, PHP My Admin ",
    desc:
      "Car Sales and Service is an all-in-one web platform that simplifies the process of exploring, purchasing, and maintaining vehicles. Users can register and log in to browse various car brands, view detailed information about different models, and even book test drive appointments online. The service module allows customers to select from multiple service types—ranging from routine checkups to advanced repairs—along with transparent pricing. By booking service appointments in advance, users can avoid long waiting lines at service centers and enjoy 24/7 access to request vehicle servicing at their convenience.\nThe platform also features a comprehensive admin panel, where administrators manage car inventories, track availability, and oversee all incoming requests. Admins can confirm or decline test drive bookings, handle out-of-stock scenarios, and manage service appointments to ensure smooth operations. By combining online vehicle browsing, appointment scheduling, and service management, this project delivers a complete digital solution for both car buyers and service seekers, highlighting features like authentication, appointment booking systems, and admin-controlled workflows.",
    video:
      "https://drive.google.com/file/d/1wWVrvM-RMrrCNL_BLlU2Eyt-eW2R9A7S/view?usp=sharing",
  },
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalDesc = document.getElementById("modalDesc");
const modalImages = document.getElementById("modalImages");

// Function to get embed URL for different platforms
function getEmbedUrl(url) {
  if (url.includes("youtu.be/") || url.includes("youtube.com/watch?v=")) {
    let videoId = "";
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } else if (url.includes("drive.google.com/file/d/")) {
    let fileId = url.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  } else {
    return url;
  }
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project");
    const project = projects[id];
    modalTitle.textContent = project.title;
    modalTech.textContent = project.tech;
    modalDesc.textContent = project.desc;
    if (
      project.video.includes("youtube.com") ||
      project.video.includes("youtu.be") ||
      project.video.includes("drive.google.com")
    ) {
      const embedUrl = getEmbedUrl(project.video);
      modalImages.innerHTML = `<iframe width="560" height="315" src="${embedUrl}" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
      modalImages.innerHTML = `<video width="560" height="315" controls><source src="${project.video}" type="video/mp4">Your browser does not support the video tag.</video>`;
    }
    modal.classList.add("active");
  });
});

document.querySelector(".modal-close").addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});

// Contact form
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const encodedToken = "ODQ3ODQ3NTM2NzpBQUdMYU1DaXdwVk9ycUY0MHRPaURTTk03VzhfanlMR3dHdw==";
const encodedChatId = "MTMxMjg4MzcwNw==";

const BOT_TOKEN = atob(encodedToken);
const CHAT_ID = atob(encodedChatId);

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const fileInput = document.getElementById("file");
  const submitButton = form.querySelector('button[type="submit"]');

  if (!name || !email || !message) {
    formMessage.textContent = "❌ Please fill in all fields.";
    formMessage.className =
      "mb-6 p-3 rounded-lg text-center font-semibold bg-red-100 text-red-700";
    formMessage.classList.remove("hidden");
    formMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  // Disable submit button
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  submitButton.classList.add("opacity-50", "cursor-not-allowed");

  const textMessage = `
📩 New Contact Form Submission
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
          `;

  try {
    // Send text message
    const textResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
        textMessage
      )}&parse_mode=HTML`
    );

    if (!textResponse.ok) {
      throw new Error("Failed to send message");
    }

    // Send file if attached
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (file.size > 20 * 1024 * 1024) {
        throw new Error("File size exceeds 20MB limit");
      }

      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("document", file);
      formData.append("caption", `File from: ${name} (${email})`);

      const fileResponse = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`,
        { method: "POST", body: formData }
      );

      if (!fileResponse.ok) {
        throw new Error("Failed to send file");
      }
    }

    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.className =
      "mb-6 p-3 rounded-lg text-center font-semibold bg-green-100 text-green-700";
    form.reset();
    formMessage.classList.remove("hidden");
    formMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (error) {
    formMessage.textContent = "❌ Failed to send message. Please try again.";
    formMessage.className =
      "mb-6 p-3 rounded-lg text-center font-semibold bg-red-100 text-red-700";
    formMessage.classList.remove("hidden");
    console.error("Error:", error);
    formMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  } finally {
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
      submitButton.classList.remove("opacity-50", "cursor-not-allowed");
    }, 3000);
  }
});




document.addEventListener("DOMContentLoaded", function() {
  initThemeToggle();
  initCertificatesModal();

  // Show initial section
  showSection('about');
});

// Add event listeners to nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    if (targetId) {
      showSection(targetId);
      if (window.innerWidth < 768) {
        closeMobileMenu();
      }
    }
  });
});

// Add event listener for hamburger menu button
document.getElementById('hamburgerBtn').addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const navMenu = document.getElementById('navMenu');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  if (window.innerWidth < 768 && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

// Handle window resize to close mobile menu on desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // md breakpoint
    closeMobileMenu();
  }
});

// Set active link function (for onclick in HTML)
function setActiveLink(element) {
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));

  // Add active class to clicked link
  element.classList.add('active');
}
