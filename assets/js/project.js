function playSound(e){

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.header__key[data-key="${e.keyCode}"]`);
    if(!audio) return; 
    audio.currenTime = 0;
    audio.play();
    key.classList.add('playing');
    
}
function removeTransition(e){
  if(e.propertyName !== 'transform')return;
  this.classList.remove('playing')
}
const keys = document.querySelectorAll('.header__key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);