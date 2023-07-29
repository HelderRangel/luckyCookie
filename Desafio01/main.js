const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const fCookie = document.querySelector('.fCookie')
const openAgain = document.querySelector('#openAgain')
let lucky = document.querySelector('.lucky')

document.addEventListener("DOMContentLoaded", function() {
  const phrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
  ];

  fCookie.addEventListener('click', function() {
    toggleScreen()
  })

  function showRandonPhrases() {
    const savedPhrases = Math.floor(Math.random() * phrases.length);
    const randonPhrases = phrases[savedPhrases];
    lucky.innerHTML = randonPhrases;
  }

  fCookie.addEventListener ('click', showRandonPhrases);
})
openAgain.addEventListener('click', function() {
  toggleScreen()
}) 

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}


