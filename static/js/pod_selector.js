const b1 = document.getElementById("button1").addEventListener("click", send_group1)
const b2 = document.getElementById("button2").addEventListener("click", send_group1)
const b3 = document.getElementById("button3").addEventListener("click", send_group1)
const b4 = document.getElementById("button4").addEventListener("click", send_group1)
const b5 = document.getElementById("button5").addEventListener("click", send_group1)
const b6 = document.getElementById("button6").addEventListener("click", send_group1)
const b7 = document.getElementById("button7").addEventListener("click", send_group1)
const b8 = document.getElementById("button8").addEventListener("click", send_group1)
const b9 = document.getElementById("button9").addEventListener("click", send_group1)
const b10 = document.getElementById("button10").addEventListener("click", send_group1)
const b11 = document.getElementById("button11").addEventListener("click", send_group1)
const b12 = document.getElementById("button12").addEventListener("click", send_group1)
const b13 = document.getElementById("button13").addEventListener("click", send_group1)


var clicks = 0;

function caller(){
   
  if(clicks == 0){
    sound();
    clicks = 1
    end();

  }  
  else{
      ok();
  }
}

function send_group1() {
    const data = 'B,C,D,E,F,G,H,I,J,K,L,M'

    var xhr = new XMLHttpRequest()
    xhr.open('POST', '/pod_selector', true)
    xhr.setRequestHeader('Content-Type', 'text/plain')
    
    xhr.send(data)
    caller()
}

function send_group2() {
  const data = 'A,C,D,E,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group3() {
  const data = 'A,B,D,E,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group4() {
  const data = 'A,B,C,E,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group5() {
  const data = 'A,B,C,D,F,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group6() {
  const data = 'A,B,C,D,E,G,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group7() {
  const data = 'A,B,C,D,E,F,H,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group8() {
  const data = 'A,B,C,D,E,F,G,I,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group9() {
  const data = 'A,B,C,D,E,F,G,H,J,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group10() {
  const data = 'A,B,C,D,E,F,G,H,I,K,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group11() {
  const data = 'A,B,C,D,E,F,G,H,I,J,L,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group12() {
  const data = 'A,B,C,D,E,F,G,H,I,J,K,M'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function send_group13() {
  const data = 'A,B,C,D,E,F,G,H,I,J,K,L'

  var xhr = new XMLHttpRequest()
  xhr.open('POST', '/pod_selector', true)
  xhr.setRequestHeader('Content-Type', 'text/plain')
  
  xhr.send(data)
}

function sound() {
  var audio = new Audio('./static/js/tune.mp3');
  audio.play();
}

function end(){
  setTimeout(
function()
{ window.open("/platform_submit","_self");}, 1000);
}

function check3(){
    var popup = document.getElementById("grad1");
    popup.classList.toggle("active");
    var popup3 = document.getElementById("popup3");
    popup3.classList.toggle("active");
    
}

function ok(){
    window.alert("ok");
}



/************* CALLING FUNCTIONS STARTED ******************/


// b1.addEventListener("click", () => {

//     // if(clicks === 0){
//         sound();
//         check3();
//         send_group1();
//         end();
    
//     // if(clicks === 1){
//     //     sound();
//     //     window.alert("ok");
//     // }

    
//     // dicto = {"clicks": clicks }
//     // json_object = json.dumps(dicto, indent = 1)
//     // with open("./static/js/block.json", "w") as outfile:
//     //     outfile.write(json_object)

// })