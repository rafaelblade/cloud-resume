// Simple typewriter effect on the title
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("main-title");
  const originalText = "Rafael Barbosa";
  let index = 0;

  title.textContent = "";

  function typeWriter() {
    if (index < originalText.length) {
      title.textContent += originalText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();