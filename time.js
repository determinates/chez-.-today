// script.js

// --- Date ---
function updateDateTime() {
  const now = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formatted = now.toLocaleDateString('en-US', options);
  document.getElementById('liveDate').textContent = formatted;
}

updateDateTime();
setInterval(updateDateTime, 25000);

// --- Time ---
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formatted = `${hours}:${minutes} ${ampm}`;
  document.getElementById('liveDate2').textContent = formatted;
}

updateTime();
setInterval(updateTime, 1000);
