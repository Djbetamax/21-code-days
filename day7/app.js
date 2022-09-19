let currentNumber = document.querySelector('.currentNumber');
let currentNum = 0;

let plusBtn = document.querySelector('.add');
plusBtn.addEventListener('click', function () {
  currentNum = currentNum + 1;
  currentNumber.innerHTML = currentNum;

  if (currentNumber.innerHTML > 0) {
    currentNumber.style.color = 'green'
  } else if (currentNumber.innerHTML == 0) {
      currentNumber.style.color = 'black'
  }
});

let minusBtn = document.querySelector('.sub');
minusBtn.addEventListener('click', function () {
  currentNum = currentNum - 1;
  currentNumber.innerHTML = currentNum;

  if (currentNumber.innerHTML < 0) {
    currentNumber.style.color = 'red'
  } else if (currentNumber.innerHTML == 0) {
    currentNumber.style.color = 'black'
  }
});

let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function () {
  currentNum = 0;
  currentNumber.innerHTML = currentNum;
  currentNumber.style.color = 'black'
});