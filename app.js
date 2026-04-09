const price = 1.0865;
const ma20 = 1.0830;
const ma50 = 1.0785;
const rsi = 38;

let signal = "⏳ Hold";

if (price > ma20 && ma20 > ma50 && rsi < 50) {
  signal = "✅ Potential Buy";
} else if (price < ma20 || rsi > 70) {
  signal = "❌ Potential Sell";
}

document.getElementById("signal").textContent = signal;