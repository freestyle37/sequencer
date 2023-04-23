"use strict";

document.addEventListener("DOMContentLoaded", function() {
  //console.log(audio_clap1);
  //infinity();
  
});

window.addEventListener('click', function(){
  play('./resources/wav/clap/EGOIST.wav', 3000);
});
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);



function keyDownHandler(event) {
  console.log(event.code);

  if (event.code === 'KeyQ') {
    kick.play();
  }
  if (event.code === 'KeyW') {
    hat.play();
  }
  if (event.code === 'KeyE') {
    clap.play();
  }
  if (event.code === 'KeyR') {
    snare.play();
  }
}

function keyUpHandler(event) {
  //audio_clap1.pause();
  //audio_clap1.currentTime = 0;
  if (event.code === 'KeyQ') {
    kick.pause();
    kick.currentTime = 0;
  }
  if (event.code === 'KeyW') {
    hat.pause();
    hat.currentTime = 0;
  }
  if (event.code === 'KeyE') {
    clap.pause();
    clap.currentTime = 0;
  }
  if (event.code === 'KeyR') {
    snare.pause();
    snare.currentTime = 0;
  }
}

function infinity() {
  const arr = ['q', 'w', 'e', 'e'];
  arr.forEach(function(item) {
    if (item === 'q') {
      setTimeout(() => kick.play(), 1000);
    }
    if (item === 'w') {
      setTimeout(() => hat.play(), 1000);
    }
  });

}

function play( audio_path, time_in_milisec) {
  let beep = new Audio( audio_path);
  beep.loop = true;
  beep.play();
  setTimeout(() => { beep.pause(); }, time_in_milisec);
}

let kick = new Audio('./resources/wav/kick/ZDRAVSTVUITE.wav');
let hat = new Audio('./resources/wav/hat/HAT.wav');
let clap = new Audio('./resources/wav/clap/EGOIST.wav');
let snare = new Audio('./resources/wav/snare/HOOKAH.wav');
//let audio_clap1 = new Audio('/resources/wav/clap/P - NNF V2 CLAP 5.wav');
