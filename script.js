//your JS code here. If required.
let inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  // Typing forward
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    // Allow only digits
    if (!/^\d$/.test(value)) {
      e.target.value = "";
      return;
    }
    // Move focus to next input if exists
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Backspace behavior
  input.addEventListener('keydown', (e) => {
    if (e.key === "Backspace") {
      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      } else {
        input.value = "";
      }
      e.preventDefault();
    }
  });

  // Auto-select text on focus for easy replacement
  input.addEventListener('focus', () => {
    input.select();
  });
});

// Set initial focus on the first input
inputs[0].focus();
