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

  // Fetch visitor count from backend API
  fetch("https://your-api-id.execute-api.region.amazonaws.com/prod/visitors")
    .then(res => res.json())
    .then(data => {
      document.getElementById("visitorCount").innerText = data.visits || "0";
    })
    .catch(err => {
      console.error("Error fetching visitor count:", err);
      document.getElementById("visitorCount").innerText = "N/A";
    });
});