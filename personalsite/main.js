// Select all project cards and filter buttons
const projects = document.querySelectorAll(".project-card");
const filterButtons = document.querySelectorAll(".filter-btn");

// Show/hide projects based on category
function filterProjects(category) {
  projects.forEach((card) => {
    const type = card.dataset.category;

    // Add or remove the "hidden" class instead of changing inline styles
    if (category === "All" || category === type) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Setup filter button behavior + accessibility
function setupFilters() {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.textContent.trim();

      // Filter the visible cards
      filterProjects(category);

      // Set aria-pressed for accessibility
      filterButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
    });
  });
}

// Show greeting based on time (conditional logic)
function greetBasedOnTime() {
  const hour = new Date().getHours();
  const message =
    hour < 12
      ? "Good morning, Jonathan!"
      : hour < 18
      ? "Good afternoon, Jonathan!"
      : "Good evening, Jonathan!";
  console.log(message);
}

// Sample data with objects and arrays
const projectMeta = [
  {
    title: "Threat Monitor",
    tools: ["Nmap"],
    type: "Networking",
  },
  {
    title: "Wireshark Traffic Analysis",
    tools: ["Wireshark", "PCAP"],
    type: "Networking",
  },
  {
    title: "Active Directory Enumeration",
    tools: ["BloodHound", "Kerberos"],
    type: "Ethical Hacking",
  },
];

// Use filter and map to extract titles
const networkingProjects = projectMeta
  .filter((p) => p.type === "Networking")
  .map((p) => p.title);

console.log("Networking Projects:", networkingProjects);

// Initialize everything
function initApp() {
  greetBasedOnTime();
  setupFilters();
}

initApp();

