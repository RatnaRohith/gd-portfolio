const projectData = {
  space: {
    code: "01", title: "Space Adventure", genre: "SCI-FI / EXPLORATION",
    engine: "Add the engine and version used by this build.",
    description: "A playable space-adventure prototype exploring the shift between on-foot third-person traversal and spaceship control. Use this case study to show how the movement systems feel, how the player transitions between modes, and how the graybox supports discovery.",
    controllers: ["Third-person character", "Spaceship handling", "Camera & input"],
    levels: ["Space graybox", "Exploration routes", "Traversal landmarks"],
    notes: "Add the real implementation details here: controller features, transition logic, a challenge you solved, and what playtesting taught you.",
    visual: "space", buildUrl: "", sourceUrl: "", videoUrl: ""
  },
  capital: {
    code: "02", title: "Storm the Capital", genre: "TACTICAL / ACTION",
    engine: "Add the engine and version used by this build.",
    description: "An action prototype built around multiple perspectives and ways to move through an urban environment. The project brings together FPS and TPS controller studies, vehicle handling, stealth spaces, and race-track blockouts.",
    controllers: ["Third-person controller", "First-person controller", "Vehicle controller"],
    levels: ["Stealth graybox", "Urban routes", "Race-track blockout"],
    notes: "Add your actual gameplay loop, stealth or vehicle mechanics, route design decisions, and controller tuning notes.",
    visual: "capital", buildUrl: "", sourceUrl: "", videoUrl: ""
  },
  mnf: {
    code: "03", title: "MNF", genre: "SURVIVAL / SANDBOX",
    engine: "Add the engine and version used by this build.",
    description: "An island-based prototype for experimenting with different control perspectives. The project explores third-person movement, top-down navigation, and animal locomotion in a shared environment.",
    controllers: ["Third-person controller", "Top-down controller", "Animal controller"],
    levels: ["Island graybox", "Coastal routes", "Landmarks & navigation"],
    notes: "Add the meaning of the project name if you want to explain it, plus real features, controller differences, and lessons from testing.",
    visual: "mnf", buildUrl: "", sourceUrl: "", videoUrl: ""
  }
};

const dialog = document.getElementById("projectDialog");
const closeDialog = document.getElementById("closeDialog");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function fillTags(element, values) {
  element.replaceChildren();
  values.forEach(value => {
    const tag = document.createElement("span");
    tag.textContent = value;
    element.appendChild(tag);
  });
}
function setLink(id, url) {
  const link = document.getElementById(id);
  if (url && url.trim()) {
    link.href = url;
    link.removeAttribute("data-placeholder-link");
    link.target = "_blank";
    link.rel = "noreferrer";
  } else {
    link.href = "#";
    link.setAttribute("data-placeholder-link", "");
  }
}
function openProject(key) {
  const project = projectData[key];
  if (!project) return;
  document.getElementById("dialogCode").textContent = project.code;
  document.getElementById("dialogTitle").textContent = project.title;
  document.getElementById("dialogGenre").textContent = project.genre;
  document.getElementById("dialogDescription").textContent = project.description;
  document.getElementById("dialogEngine").textContent = project.engine;
  document.getElementById("dialogNotes").textContent = project.notes;
  fillTags(document.getElementById("dialogControllers"), project.controllers);
  fillTags(document.getElementById("dialogLevels"), project.levels);
  document.getElementById("dialogVisual").className = "dialog-visual dialog-" + project.visual;
  setLink("buildLink", project.buildUrl);
  setLink("sourceLink", project.sourceUrl);
  setLink("videoLink", project.videoUrl);
  if (!dialog.open) dialog.showModal();
}
document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.open)));
closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && dialog.open) dialog.close(); });
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.addEventListener("click", event => {
  const link = event.target.closest("[data-placeholder-link]");
  if (link) {
    event.preventDefault();
    alert("This is a placeholder. Add your real contact, build, video, source, or resume URL before publishing.");
  }
});
document.getElementById("year").textContent = new Date().getFullYear();
