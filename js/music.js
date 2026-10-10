(() => {
  const audio = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicButton");
  const buttonText = document.getElementById("musicButtonText");
  if (!audio || !button) return;

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.setAttribute("aria-pressed", "true");
        buttonText.textContent = "Pause";
      } catch {
        buttonText.textContent = "Add audio file";
        window.alert("Add a legally obtained file named living-room-flow.mp3 to the assets folder, or replace this with a music-service link.");
      }
    } else {
      audio.pause();
      button.setAttribute("aria-pressed", "false");
      buttonText.textContent = "Music";
    }
  });
  audio.addEventListener("ended", () => {
    button.setAttribute("aria-pressed", "false");
    buttonText.textContent = "Music";
  });
})();
