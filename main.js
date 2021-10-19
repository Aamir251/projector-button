const button = document.getElementById('button'),
      light = document.getElementById('light'),
      cover = document.getElementById('cover');

let isCurrentlyPlaying = false; //initially it is at pause state
button.addEventListener('click',()=>{
  if (!isCurrentlyPlaying) {
    button.innerText = "Pause";
    light.style.animation = "lightOn .5s linear forwards"
    cover.style.animation = "openCover 0.8s ease-in-out forwards"
    isCurrentlyPlaying  = !isCurrentlyPlaying;
  }
  else {
    button.innerText = "Play";
    light.style.animation = "lightOff 0.6s linear forwards"
    cover.style.animation = "closeCover 0.8s ease-in-out forwards"
    isCurrentlyPlaying = !isCurrentlyPlaying;
  }
})
