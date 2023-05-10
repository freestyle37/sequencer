"use strict";

let kick = new Audio('./resources/wav/kick/ZDRAVSTVUITE.wav');
kick.volume = 0.5;
let hat = new Audio('./resources/wav/hat/HAT.wav');
let clap = new Audio('./resources/wav/clap/EGOIST.wav');
let snare = new Audio('./resources/wav/snare/HOOKAH.wav');



document.addEventListener("DOMContentLoaded", function() {




  let screenLog = document.querySelector("#screen-log");

  let s = document.querySelector('.s');

  let drums_ui = document.createElement('div');
  drums_ui.setAttribute('class', 'drums_ui');
  s.append(drums_ui);

  let drums_list = createItem('drums_list');
  drums_ui.append(drums_list);

  let drums_list_add_item_btn = createItem('drums_list_add_item_btn', 'add');
  drums_ui.append(drums_list_add_item_btn);

  const aud_pth = "./resources/wav";

  const urls = {
    kick_url: aud_pth + "/kick/ZDRAVSTVUITE.wav",
    clap_url: aud_pth + "/clap/EGOIST.wav",
    hat_url: aud_pth + "/hat/HAT.wav",
    snare_url: aud_pth + "/snare/HOOKAH.wav"
  }

  const arr = [[urls.kick_url, 100], [urls.hat_url, 300], [urls.clap_url, 500, 1000], [urls.hat_url, 700]];

  window.addEventListener('click', function(event) {

    arr.forEach((item, i)=> {
      //console.log(item[0], ' ', item[1], event.timeStamp);

      //setTimeout(() => { play(arr[i][0], arr[i][2]); }, arr[i][1]);
    });
    //event.timeStamp
    
    //clap.play();

  });

  let s_head = document.querySelector('.s_head');
  const draggable = document.querySelectorAll('.draggable');
  
  draggable.forEach(function(element) {

      
      element.onmousedown = function() {
        return false;
      };
      element.addEventListener('mousedown', sHeadMousedownHandler);
    

  });


  function sHeadMousedownHandler(event) {
    if (!event.target) {
      return;
    }
   if (event.button !== 0) {
     //console.log(event.target);
     return
    } else {
      let s_head_rect = s_head.getBoundingClientRect();

      const cusrsor_init = {
        x: event.pageX,
        y: event.pageY
      }

      //console.log(s_head_rect);
  
      let my_event = new Event("delete-up-and-move");
      

      const sMove = { handleEvent: sHeadMouseMoveHandler, s_head_rect, cusrsor_init};

      const sUp = { handleEvent: sHeadMouseUpHandler, my_event: my_event };

      const sThree = { handleEvent: deleteMoveAndUpHandler, sMove, sUp: sUp };

      document.addEventListener("mousemove", sMove);
      document.addEventListener("mouseup", sUp);
      document.addEventListener("delete-up-and-move", sThree);

    }
  }

  function sHeadMouseMoveHandler(event) {
    screenLog.innerText = `${event.pageX} ${event.pageY}`;
    s.style.left = this.s_head_rect.left + (event.pageX - this.cusrsor_init.x) + 'px';
    s.style.top = this.s_head_rect.top + (event.pageY - this.cusrsor_init.y) + 'px';

    console.log(this.s_head_rect.left, this.s_head_rect.top, this.cusrsor_init.x, this.cusrsor_init.y);
  }

  function sHeadMouseUpHandler(event) {
    //console.log(this.my_event);
    document.dispatchEvent(this.my_event);
    //deleteMoveAndUpHandler(this.sMove, this.sUp);
    
  }

  function deleteMoveAndUpHandler(event) {
    console.log('d');
    document.removeEventListener("mousemove", this.sMove);
    document.removeEventListener("mouseup", this.sUp);
  }

  drums_list_add_item_btn = document.querySelector('.drums_list_add_item_btn');
  this.addEventListener('click', function() {

  });

});


document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);



function keyDownHandler(event) {
  if (event.repeat) { return }
  console.log(event.code);

  if (event.code === 'KeyQ') {
    //console.log(kick);
    kick.play();
  } else if (event.code === 'KeyW') {
    hat.play();
  } else if (event.code === 'KeyE') {
    clap.play();
  } else if (event.code === 'KeyR') {
    snare.play();
  } else {
    return;
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

function play( audio_path, time_in_milisec=false) {
  let beep = new Audio( audio_path);
  //console.log(time_in_milisec);
  //audio_obj_type.loop = true; 
  beep.play();
  if (time_in_milisec) {
    setTimeout(() => { beep.pause(); }, time_in_milisec);
  }

}

function createItem(class_name, item_txt) {
  let item = document.createElement('div');
  item.setAttribute('class', class_name);

  if (item_txt) {
    item.textContent = item_txt;
  }

  return item;
}

