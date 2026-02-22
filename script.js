// BUTTON TOGGLE
let toggled = false;
let btn = document.getElementById("perfom");
let msg = document.getElementById("msg");

btn.addEventListener("click", function () {
  if (!toggled) {
    msg.textContent = "I Luke loves coding very much, so help me God";
    msg.style.color = "rgb(248, 246, 244)";
    msg.style.backgroundColor = "transparent";
    msg.style.fontSize = "15px";
    toggled = true;
  } else {
    msg.textContent = "of mode";
    msg.style.color = "black";
    msg.style.backgroundColor = "transparent";
    msg.style.fontSize = "14px";
    toggled = false;
  }
});

// NAVIGATION CONTENT SYSTEM
let home = document.getElementById("homeLink");
let about = document.getElementById("aboutLink");
let project = document.getElementById("projectsLink");
let contact = document.getElementById("contactLink");

let contentMsg = document.getElementById("contentmsg");
contentMsg.style.position = "absolute";
contentMsg.style.top = "225px";
contentMsg.style.right = "50px";
contentMsg.style.borderRadius = "1rem";

home.addEventListener("click", function (e) {
  e.preventDefault();
  contentMsg.textContent =
    "Welcome to my home page, relax — we are prepared to equip you brother";
  contentMsg.style.color = "rgb(11, 12, 12)";
  contentMsg.style.backgroundColor = "rgb(252, 251, 253)";
  contentMsg.style.fontSize = "16px";
});
about.addEventListener("click", function (e) {
  e.preventDefault();
  contentMsg.textContent = "about me ,am lord luke";
  contentMsg.style.color = "rgb(11, 12, 12)";
  contentMsg.style.backgroundColor = "rgb(252, 251, 253)";
  contentMsg.style.fontSize = "16px";
});

project.addEventListener("click", function (e) {
  e.preventDefault();
  contentMsg.textContent =
    "We are building the most powerful AI platform  the future is here.";
  contentMsg.style.color = "rgb(12, 14, 13)";
  contentMsg.style.backgroundColor = "rgb(252, 253, 255)";
  contentMsg.style.fontSize = "16px";
});
contact.addEventListener("click", function (e) {
  e.preventDefault();

  contentMsg.textContent = "you realy troubled me, i swwer";
  contentMsg.style.color = "rgb(10, 10, 10)";
  contentMsg.style.backgroundColor = "rgb(235, 235, 235)";
  contentMsg.style.fontSize = "16px";
});

// =============================
// PROFESSIONAL SLIDER (PNG + JPG)
// =============================

const totalImages = 18;
let images = [];

// Generate image paths
for (let i = 1; i <= totalImages; i++) {
  images.push(`images/imag${i}.png`);
  images.push(`images/imag${i}.jpg`);
}

// Preload and keep valid images
let validImages = [];
let loadedCount = 0;

images.forEach((src) => {
  const img = new Image();
  img.src = src;

  img.onload = () => {
    validImages.push(src);
    loadedCount++;

    if (loadedCount === images.length) {
      startSlider();
      buildGallery();
    }
  };

  img.onerror = () => {
    loadedCount++;

    if (loadedCount === images.length) {
      startSlider();
      buildGallery();
    }
  };
});

function startSlider() {
  if (validImages.length === 0) return;

  const slideImage = document.getElementById("slide-image");
  let index = 0;

  slideImage.src = validImages[0];

  setInterval(() => {
    index++;
    if (index >= validImages.length) {
      index = 0;
    }

    slideImage.style.opacity = 0;

    setTimeout(() => {
      slideImage.src = validImages[index];
      slideImage.style.opacity = 1;
    }, 400);
  }, 3500);
}

// =============================
// GALLERY BUILDER (dynamic)
// =============================

let currentIndex = 0;

function buildGallery() {
  const grid = document.getElementById("gallery-grid");

  if (!grid) return;
  grid.innerHTML = "";

  validImages.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "gallery image";

    img.onclick = () => {
      openLightbox(index);
    };

    grid.appendChild(img);
  });
}

// =============================
// LIGHTBOX MODAL
// =============================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImg.src = validImages[currentIndex];

  addHistory("Viewed image: " + validImages[currentIndex]);
}
document.getElementById("lightbox-next").onclick = () => {
  currentIndex++;
  if (currentIndex >= validImages.length) currentIndex = 0;
  lightboxImg.src = validImages[currentIndex];
};

document.getElementById("lightbox-prev").onclick = () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = validImages.length - 1;
  lightboxImg.src = validImages[currentIndex];
};

lightboxClose.onclick = () => {
  lightbox.style.display = "none";
};

// CLOSE LIGHTBOX WHEN CLICKING OUTSIDE IMAGE (optional)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// =============================
// HISTORY (LOCAL STORAGE)
// =============================

let historyList = document.getElementById("history-list");
let clearBtn = document.getElementById("clear-history");

// load history on start
function loadHistory() {
  let saved = localStorage.getItem("history");
  if (!saved) return;

  let items = JSON.parse(saved);
  items.forEach((text) => addHistory(text, false));
}

function addHistory(text, save = true) {
  if (!historyList) return;

  let li = document.createElement("li");
  li.textContent = text;
  historyList.prepend(li);

  if (save) saveHistory();
}

function saveHistory() {
  let items = [];
  historyList.querySelectorAll("li").forEach((li) => {
    items.push(li.textContent);
  });

  localStorage.setItem("history", JSON.stringify(items));
}

// clear history
if (clearBtn) {
  clearBtn.onclick = () => {
    localStorage.removeItem("history");
    historyList.innerHTML = "";
  };
}

// load on start
loadHistory();
