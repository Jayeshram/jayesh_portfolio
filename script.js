document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
