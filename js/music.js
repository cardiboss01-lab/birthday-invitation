
const music = document.querySelector("#backgroundMusic");
const musicButton = document.querySelector("#musicButton");
const musicButtonText = document.querySelector("#musicButtonText");

if (music && musicButton && musicButtonText) {
  musicButton.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicButtonText.textContent = "Pause music";
        musicButton.setAttribute("aria-pressed", "true");
      } else {
        music.pause();
        musicButtonText.textContent = "Music";
        musicButton.setAttribute("aria-pressed", "false");
      }
    } catch (error) {
      console.error("Audio error:", error);
      alert("The song could not play. Please check the MP3 file path and open the browser console for details.");
    }
  });
}
