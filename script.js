// BUTTON TOGGLE
let toggled = false;
let btn = document.getElementById("perfom");
let msg = document.getElementById("msg");

btn.addEventListener("click", function () {
  if (!toggled) {
    msg.textContent = "I Luke loves coding very much, so help me God";
    msg.style.color = "#fff";
    msg.style.backgroundColor = "transparent";
    msg.style.fontSize = "15px";
    toggled = true;
  } else {
    msg.textContent = "of mode";
    msg.style.color = "#000";
    msg.style.backgroundColor = "transparent";
    msg.style.fontSize = "14px";
    toggled = false;
  }
});

// NAVIGATION CONTENT
let home = document.getElementById("homeLink");
let about = document.getElementById("aboutLink");
let project = document.getElementById("projectsLink");
let contact = document.getElementById("contactLink");
let contentMsg = document.getElementById("contentmsg");

home.addEventListener("click", (e) => {
  e.preventDefault();
  contentMsg.textContent =
    "Welcome to my home page, relax — we are prepared to equip you brother";
  contentMsg.style.color = "#000";
  contentMsg.style.backgroundColor = "#fcfbfd";
  contentMsg.style.fontSize = "16px";
});
about.addEventListener("click", (e) => {
  e.preventDefault();
  contentMsg.textContent = "About me — I am Lord Luke";
  contentMsg.style.color = "#000";
  contentMsg.style.backgroundColor = "#fcfbfd";
  contentMsg.style.fontSize = "16px";
});
project.addEventListener("click", (e) => {
  e.preventDefault();
  contentMsg.textContent =
    "We are building the most powerful AI platform. The future is here.";
  contentMsg.style.color = "#000";
  contentMsg.style.backgroundColor = "#fcfdff";
  contentMsg.style.fontSize = "16px";
});
contact.addEventListener("click", (e) => {
  e.preventDefault();
  contentMsg.textContent = "You really challenged me, I swear!";
  contentMsg.style.color = "#000";
  contentMsg.style.backgroundColor = "#ebebeb";
  contentMsg.style.fontSize = "16px";
});

// =========================
// GALLERY DATA
// =========================
const galleryImages = [
  "images/lab1.jpg",
  "images/lab2.jpg",
  "images/lab3.jpg",
  "images/lab4.jpg",
  "images/lab5.jpg",
  "images/lab6.jpg",
  "images/lab7.jpg",
  "images/lab8.jpg",
  "images/lab9.jpg",
  "images/lab10.jpg",
  "images/lab11.jpg",
  "images/lab12.jpg",
  "images/lab13.jpg",
  "images/lab14.jpg",
  "images/lab15.jpg",
  "images/lab16.jpg",
  "images/lab17.jpg",
  "images/lab18.jpg",
  "images/lab19.jpg",
  "images/lab20.jpg",
  "images/lab21.jpg",
  "images/lab22.jpg",
  "images/lab23.jpg",
  "images/lab24.jpg",
  "images/lab26.jpg",
  "images/lab27.jpg",
];

const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 1;
const itemsPerPage = 7;
const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

// =========================
// FUNCTION TO RENDER PAGE
// =========================
function renderGallery() {
  galleryGrid.innerHTML = "";
  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;
  galleryImages.slice(start, end).forEach((src, idx) => {
    let div = document.createElement("div");
    div.classList.add("gallery-item");
    div.innerHTML = `<img src="${src}" alt="Lab ${start + idx + 1}"/><div class="caption">Lab ${start + idx + 1}</div>`;
    galleryGrid.appendChild(div);

    // Add click lightbox
    div.querySelector("img").addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = src;
    });
  });

  // Disable/Enable buttons
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// =========================
// PAGINATION BUTTONS
// =========================
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderGallery();
  }
});
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderGallery();
  }
});

// =========================
// LIGHTBOX CLOSE
// =========================
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

// =========================
// INITIAL RENDER
// =========================
renderGallery();
