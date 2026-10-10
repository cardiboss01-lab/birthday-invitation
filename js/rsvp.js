(() => {
  const form = document.getElementById("rsvpForm");
  const message = document.getElementById("rsvpMessage");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("guestName").value.trim();
    const attendance = form.querySelector('input[name="attendance"]:checked')?.value;
    if (!name || !attendance) {
      message.textContent = "Please add your name and choose an RSVP option.";
      return;
    }
    const subject = encodeURIComponent("Chapter 18 RSVP — " + name);
    const body = encodeURIComponent(
      "Lwazi R Mangali — Chapter 18 RSVP\n\nName: " + name + "\nAttendance: " + attendance +
      "\n\nThis RSVP was prepared from the invitation website."
    );
    message.textContent = "Your email app should open with your RSVP ready to send. Please press Send in your email app to complete it.";
    window.location.href = "mailto:Lizyberry51@gmail.com?subject=" + subject + "&body=" + body;
  });
})();
