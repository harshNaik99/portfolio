// ===== Split Screen Animation (Safe Check) =====
const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const overlay = document.querySelector('.overlay');

if (container && left && right && overlay) {
  container.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const width = window.innerWidth;
    const percent = (x / width) * 100;

    left.style.width = `${percent}%`;
    right.style.width = `${100 - percent}%`;
    overlay.style.left = `${percent}%`;
  });

  container.addEventListener('mouseleave', () => {
    left.style.width = '50%';
    right.style.width = '50%';
    overlay.style.left = '50%';
  });
}

// ===== Dynamic Project Cards =====
const projects = [
  {
    title: "My Figma Design System",
    category: "Design System",
    image: "resources/figma-design.png"
  },
  {
    title: "My UI Design Book",
    category: "Book",
    image: "resources/ui-book.png"
  },
  {
    title: "Creating a Lean Design System",
    category: "Design System",
    image: "resources/lean-design.png"
  }
];

// Inject project cards dynamically
const cardContainer = document.getElementById("cardContainer");

if (cardContainer) {
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="card-content">
        <div class="card-title">${project.title}</div>
        <div class="card-category">${project.category}</div>
      </div>
    `;
    cardContainer.appendChild(card);
  });
}
