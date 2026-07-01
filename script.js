const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const filterButtons = document.querySelectorAll(".filter-button");
const searchInput = document.querySelector("#project-search");
const projectCards = document.querySelectorAll(".project-card");
const emptyState = document.querySelector("#empty-state");

let activeFilter = "all";

function normalize(value) {
  return value.toLowerCase().trim();
}

function applyProjectFilters() {
  const query = normalize(searchInput.value);
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const labs = card.dataset.lab || "";
    const searchable = normalize(`${card.innerText} ${card.dataset.search || ""}`);
    const matchesFilter = activeFilter === "all" || labs.split(" ").includes(activeFilter);
    const matchesSearch = !query || searchable.includes(query);
    const isVisible = matchesFilter && matchesSearch;

    card.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  emptyState.hidden = visibleCount !== 0;
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    applyProjectFilters();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", applyProjectFilters);
}

const sections = [...document.querySelectorAll("main section[id]")];

function setActiveNavigation() {
  const scrollPosition = window.scrollY + 120;
  const current = sections
    .filter((section) => section.offsetTop <= scrollPosition)
    .at(-1);

  navLinks.forEach((link) => {
    link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

window.addEventListener("scroll", setActiveNavigation, { passive: true });
setActiveNavigation();
applyProjectFilters();
