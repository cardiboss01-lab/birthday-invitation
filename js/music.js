
const music = new Audio("assets/living-room-flow.mp3");
music.loop = true;
music.volume = 0.7;

const musicButton = document.querySelector("#music-toggle");

if (musicButton) {
  musicButton.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
        musicButton.textContent = "❚❚ Pause music";
      } else {
        music.pause();
        musicButton.textContent = "▶ Play music";
      }
    } catch (error) {
      console.error("Music playback failed:", error);
      alert("The song could not play. Check the file path and try again.");
    }
  });
}
