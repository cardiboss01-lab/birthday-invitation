/* Front-end preview gate only. Do NOT use this as real password protection.
   Anyone can inspect client-side JavaScript. Add server-side authentication before publishing. */
const PREVIEW_CODE = "Chapter18Lwazi";

const accessScreen = document.getElementById("accessScreen");
const siteContent = document.getElementById("siteContent");
const accessForm = document.getElementById("accessForm");
const accessCode = document.getElementById("accessCode");
const accessMessage = document.getElementById("accessMessage");

accessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (accessCode.value.trim() === PREVIEW_CODE) {
    accessMessage.textContent = "";
    accessScreen.classList.add("is-leaving");
    window.setTimeout(() => {
      accessScreen.hidden = true;
      siteContent.hidden = false;
      document.body.classList.add("site-open");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 450);
  } else {
    accessMessage.textContent = "That code doesn't look right. Please check it and try again.";
    accessCode.value = "";
    accessCode.focus();
  }
});

// Small reveal effect for content entering the viewport.
const revealTargets = document.querySelectorAll(".section-heading, .invitation-card, .countdown-wrap, .rsvp-card");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => observer.observe(target));
}
