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


let ytPlayer;
let playerReady = false;
let enterClicked = false;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player("youtubePlayer", {
        width: "320",
        height: "200",
        videoId: "9usFmiEE4BY",
        playerVars: {
            playsinline: 1,
            controls: 1,
            rel: 0
        },
        events: {
            onReady: function () {
                playerReady = true;
                document.getElementById("enterButton").textContent =
                    "♫ Play & Enter";
            }
        }
    });
}

document.getElementById("enterButton").addEventListener("click", function () {
    enterClicked = true;

    if (!playerReady) {
        this.textContent = "Loading song... tap again shortly";
        return;
    }

    ytPlayer.playVideo();

    // Keep the entrance visible until the guest starts the song.
    // Then reveal the birthday website.
    document.getElementById("musicEntrance").classList.add("hidden");
});
