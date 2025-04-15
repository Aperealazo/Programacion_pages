const toggleButton = document.getElementById("toggleTheme");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  toggleButton.textContent = "🌙 Modo Oscuro";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙 Modo Oscuro";
  } else {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️ Modo Claro";
  }
});

