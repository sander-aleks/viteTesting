// Stepper component

let stepperValue = 0;
// 1. Get plus button element from doc
const plusButton = document.querySelector('.stepper-component-plus');
const minusButton = document.querySelector('.stepper-component-minus');
const stepperComponentInput = document.querySelector('.stepper-component-input');

// 2. add eventlistener

stepperComponentInput.addEventListener('keypress', (event) => {
  if (event.charCode >= 48 && event.charCode <= 57) return;
  // if (event.charCode <= 48 && event.charCode >= 57);
  event.preventDefault();
})

plusButton.addEventListener('click', () => {
  stepperComponentInput.value++;
});

minusButton.addEventListener('click', () => {
  if(Number(stepperComponentInput.value)=== 0) return;
  stepperComponentInput.value--;
})

// 3.on click add 1 to stepper

