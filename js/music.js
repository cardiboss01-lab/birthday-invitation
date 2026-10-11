
const music = new Audio("assets/living-room-flow.mp3");

music.loop = true;
music.volume = 0.7;

const musicButton = document.querySelector("#musicButton");
const musicButtonText = document.querySelector("#musicButtonText");

if (musicButton) {
  musicButton.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicButtonText.textContent = "Pause music";
        musicButton.setAttribute("aria-pressed", "true");
      } else {
        music.pause();
        musicButtonText.textContent = "Play music";
        musicButton.setAttribute("aria-pressed", "false");
      }
    } catch (error) {
      console.error("Music playback failed:", error);
      alert("The song couldn't play. Check that the MP3 file is in the assets folder and named living-room-flow.mp3.");
    }
  });
}
