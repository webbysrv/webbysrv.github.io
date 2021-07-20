const playerOne = document.getElementById('playerOne');
const playerVersus = document.getElementById('playerVersus');

const jump = () => {
  console.log(playerOne.classList);
  console.log('here');
  let timeout = 1000;
  if (!playerOne.classList.contains('animate')) {
    playerOne.classList.add('animate');
    setTimeout(() => {
      playerOne.classList.remove('animate');
    }, timeout);
  }
};

const checkDead = setInterval(() => {
  //console.log('here2');
  let playerOneTop = parseInt(
    window.getComputedStyle(playerOne).getPropertyValue('top')
  );
  let playerVersusLeft = parseInt(
    window.getComputedStyle(playerVersus).getPropertyValue('left')
  );
  if (playerVersusLeft < 20 && playerVersusLeft > 0 && playerOneTop >= 130) {
    //playerVersus.style.animation = 'none';
    //playerVersus.style.display = 'none';
    //alert('oh oh... you lose!');
  }
}, 10);

document.body.addEventListener('keyup', (e) => {
  if (e.code == 'Space') {
    console.log('space pressed');
    jump();
  }
});

document.onload = checkDead;
