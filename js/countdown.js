(() => {
  // Dinner time is 16:30 in South Africa (UTC+2). Date is 31 October 2026.
  const targetTime = new Date("2026-10-31T16:30:00+02:00").getTime();
  const fields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };
  function updateCountdown() {
    let remaining = targetTime - Date.now();
    if (remaining <= 0) {
      Object.values(fields).forEach((field) => { if (field) field.textContent = "00"; });
      return;
    }
    const days = Math.floor(remaining / 86400000);
    remaining %= 86400000;
    const hours = Math.floor(remaining / 3600000);
    remaining %= 3600000;
    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    fields.days.textContent = String(days).padStart(2, "0");
    fields.hours.textContent = String(hours).padStart(2, "0");
    fields.minutes.textContent = String(minutes).padStart(2, "0");
    fields.seconds.textContent = String(seconds).padStart(2, "0");
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
