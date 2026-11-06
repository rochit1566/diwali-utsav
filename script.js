// Diwali countdown. The 2026 target date is 8 November.
function updateCountdown() {
  const target = new Date("2026-11-08T00:00:00").getTime();
  const now = Date.now();
  const difference = target - now;
  const timer = document.getElementById("timer");

  if (difference <= 0) {
    timer.textContent = "Happy Diwali! 🪔";
    return;
  }

  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  timer.textContent = `${days} Days ${hours} Hours ${minutes} Min ${seconds} Sec`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Shopping checklist
document.getElementById("shoppingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("shoppingInput");
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const label = document.createElement("span");
  label.textContent = value;
  checkbox.addEventListener("change", () => {
    label.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });
  li.append(checkbox, label);
  document.getElementById("shoppingList").appendChild(li);
  input.value = "";
});

// Budget calculator
let totalExpense = 0;
document.getElementById("expenseForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("expense");
  const amount = Number(input.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid expense greater than zero.");
    return;
  }
  totalExpense += amount;
  document.getElementById("total").textContent =
    "₹" + totalExpense.toLocaleString("en-IN", { maximumFractionDigits: 2 });
  input.value = "";
});

// Greeting maker
document.getElementById("greetingForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("person").value.trim();
  if (!name) return;
  document.getElementById("greeting").textContent =
    `Dear ${name}, wishing you a Happy Diwali! May your life shine with happiness, success and prosperity. 🪔✨`;
});

// Virtual diya
document.getElementById("diyaButton").addEventListener("click", () => {
  const diya = document.getElementById("virtualDiya");
  diya.classList.toggle("lit");
  const isLit = diya.classList.contains("lit");
  document.getElementById("diyaButton").textContent = isLit ? "Turn off the diya" : "Light the diya";
  document.getElementById("diyaMessage").textContent =
    isLit ? "Your diya is glowing! Spread happiness! ✨" : "Spread happiness and light!";
});
