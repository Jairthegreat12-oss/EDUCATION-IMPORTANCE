const items = [
  {
    title: "SVG Canvas Runner",
    description: "Launch direct standalone vector rendering with embedded XHTML elements.",
    link: "./index.svg",
    label: "Open SVG",
  },
  {
    title: "Client-Side Cache",
    description: "Manage local service worker storage and progressive offline bundles.",
    link: "javascript:void(0)",
    action: () => alert("Cache operational: All assets cached via sw.js"),
    label: "Check Cache",
  },
  {
    title: "GitHub Repository",
    description: "Inspect deployment sources, manifest config, and automation pipelines.",
    link: "https://github.com",
    label: "Repository",
    external: true,
  },
];

const container = document.getElementById("card-container");
const searchInput = document.getElementById("app-search");

function renderCards(filter = "") {
  container.innerHTML = "";
  const filtered = items.filter(
    (item) =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.description.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach((item) => {
    const card = document.createElement("div");
    card.className = "app-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    const btn = document.createElement("a");
    btn.className = "card-btn";
    btn.textContent = item.label;
    btn.href = item.link;

    if (item.external) {
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
    }

    if (item.action) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        item.action();
      });
    }

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  renderCards(e.target.value);
});

// Initial render
renderCards();
