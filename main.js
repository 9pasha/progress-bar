window.onload = () => {
  const circleProgress = document.querySelector('.main-block__progress-circle-block');
  const allCircles = document.querySelectorAll('#btn-circle');
  const allButtons = document.querySelectorAll('#btn');
  const degree = 0;
  let timer = 0;

  function btnEvent() {
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener('click', () => {
        if (getComputedStyle(allCircles[i]).getPropertyValue('background-color') === 'rgb(117, 114, 114)') {
          allButtons[i].style.backgroundColor = 'rgb(72, 235, 31)';
          allCircles[i].style.transform = 'translate(22px, -50%)';
          allCircles[i].style.backgroundColor = 'white';
          if (i == 1) {
            circleProgress.style.visibility = 'hidden';
          } else {
            animateCircle(degree);
          }
        } else {
          allButtons[i].style.backgroundColor = '';
          allCircles[i].style.transform = '';
          allCircles[i].style.backgroundColor = '';
          if (i == 1) {
            circleProgress.style.visibility = '';
          } else {
            clearTimeout(timer);
            circleProgress.style.transform = '';
          }
        }
      });
    }
  }

  function animateCircle(deg) {
    circleProgress.style.transform = 'rotate('+deg+'deg)';
    deg += 1;
    timer = setTimeout(animateCircle, 30);
  }

  btnEvent();
};
