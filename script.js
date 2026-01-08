const video = document.querySelector(".hero-video");

// Safari loop fallback
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play().catch(() => {});
});

// Resume playback after tab switch (Safari)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && video.paused) {
    video.play().catch(() => {});
  }
});
