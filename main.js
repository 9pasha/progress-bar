const circleProgress = document.querySelector('.circle-block__circle');
const svg = document.querySelector('svg');
const allCircles = document.querySelectorAll('.btn-block__btn-circle');
const allButtons = document.querySelectorAll('.btn-block__btn');
const input = document.querySelector('.btn-block__input');
const radius = circleProgress.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
let timer = 0;
let deg = 0;

circleProgress.style.strokeDasharray = ''+circumference+' '+circumference+'';
circleProgress.style.strokeDashoffset = 300;

function btnEvent() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
      if (getComputedStyle(allCircles[i]).getPropertyValue('background-color') === 'rgb(117, 114, 114)') {
        allButtons[i].style.backgroundColor = 'rgb(72, 235, 31)';
        allCircles[i].style.transform = 'translate(22px, -50%)';
        allCircles[i].style.backgroundColor = 'white';
        if (i == 1) {
          svg.style.visibility = 'hidden';
        } else {
          animateCircle();
        }
      } else {
        allButtons[i].style.backgroundColor = '';
        allCircles[i].style.transform = '';
        allCircles[i].style.backgroundColor = '';
        if (i == 1) {
          svg.style.visibility = '';
        } else {
          clearTimeout(timer);
          circleProgress.style.transform = '';
        }
      }
    });
  }
}

function animateCircle() {
  document.querySelector('.circle-block').style.transform = 'rotate('+deg+'deg)';
  deg -= 1;
  console.log(deg);
  timer = setTimeout(animateCircle, 30);
}

function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circleProgress.style.strokeDashoffset = offset;
}

function getValue() {
  input.oninput = () => {
      setProgress(input.value);
  };
}

btnEvent();
getValue();
