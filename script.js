const boxes = document.querySelectorAll(".box");
const totalDisplay = document.getElementById("total");

const priceMap = {
  1: 10,
  2: 18,
  3: 24,
};

boxes.forEach((box) => {
  const radio = box.querySelector("input[type='radio']");
  radio.addEventListener("change", () => {
    boxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");
    const unit = parseInt(radio.value);
    totalDisplay.textContent = `$${priceMap[unit]}.00 USD`;
  });

  // Ensure active box is styled on load
  if (radio.checked) {
    box.classList.add("active");
  }
});

// ✅ Set default total price based on pre-selected radio (unit 2)
const checkedRadio = document.querySelector("input[type='radio']:checked");
if (checkedRadio) {
  const unit = parseInt(checkedRadio.value);
  totalDisplay.textContent = `$${priceMap[unit]}.00 USD`;
}
