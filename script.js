function calculateReturn() {
  const input = document.getElementById('investmentInput').value;
  if (!input || input <= 0) {
    document.getElementById('monthlyReturnOutput').textContent = "Please enter a valid amount.";
    return;
  }
  const monthlyReturn = input * 0.02;
  document.getElementById('monthlyReturnOutput').textContent = 
    `Your monthly return is ₹${monthlyReturn.toFixed(2)}`;
}
