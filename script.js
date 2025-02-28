const form = document.querySelector("#countdown-form");
const entry = document.querySelector("#countdown");
const clearBtn = document.querySelector("#clear-btn");
const p = document.querySelector(".countdown-text");
let countdownInterval;

const initApp = () => {
  entry.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    p.style.display = "block";

    if (validEntry(entry.value)) {
      startInterval();
    } else {
      window.alert("please enter a number!");
      clearDisplay();
    }
  });

  clearBtn.addEventListener("click", () => {
    clearInterval(countdownInterval);
    clearDisplay();
  });
};

const startInterval = () => {
  let countdownEntry = parseInt(entry.value);
  p.textContent = countdownEntry;

  countdownInterval = setInterval(() => {
    if (countdownEntry > 0) {
      countdownEntry--;
      p.textContent = countdownEntry;
    } else {
      clearInterval(countdownInterval);
      p.textContent = "time is up!";
    }
  }, 1000);
};

const clearDisplay = () => {
  entry.value = "";
  entry.focus();
  p.style.display = "none";
};

const validEntry = (text) => {
  const regex = /^[0-9]+$/;
  return regex.test(text);
};

document.addEventListener("DOMContentLoaded", initApp);
