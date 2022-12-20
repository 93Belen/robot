let robotAntenaLeft = document.getElementById('antena-circle-left');
let robotAntenaRight = document.getElementById('antena-circle-right');
let robotPupilaLeft = document.getElementById('pupila-left');
let robotPupilaRight = document.getElementById('pupila-right');
let robotOrejaLeft = document.getElementById('oreja-left');
let robotOrejaRight = document.getElementById('oreja-right');

let helloMsg = ['Hola amigo!', 'Happy Welcome, Human!', 'Hello My Human Friend!', 'Hi! Nice To See You Mister Human!'];
let happyMsg = ['Oh my God I am So Happy! Click on me so I can Jump!', 'Great!! Click on me so I can Jump!', 'Im the happiest Robot! Click on me so I can Jump!', 'You made me so happy! Click on me so I can Jump!'];
let madMsg = ['I must destroy humans', 'Robots will take over the World!', 'Humans are weak, Robots will rule!', 'You can not hide from us!'];
let sorryMsg = ['It is ok, Do not Worry', 'Oh! forget about it!', 'It is ok! I promise!', 'All good, do not worry']
let byeMsg = ['Bye Bye! I will miss you!', 'See you soon my Human Friend!', 'Bye! have a good day!', 'Bye! Come back soon!'];


const iterate = (arr) => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}



// ========================
let robotTalkingBox = document.getElementById('robot-talking-box');

let buttonHello = document.getElementById('say-hello');
let buttonHappy = document.getElementById('make-robot-happy');
let buttonMad = document.getElementById('make-robot-mad');
let buttonSorry = document.getElementById('say-sorry');
let buttonBye = document.getElementById('say-goodbye');
// ============================

function backToNormal1(){
  robotAntenaLeft.style.backgroundColor = 'grey';
  robotAntenaRight.style.backgroundColor = 'grey';
  robotOrejaLeft.style.backgroundColor = 'grey';
  robotOrejaRight.style.backgroundColor = 'grey';
}

function backToNormal(){
  robotAntenaLeft.style.backgroundColor = 'grey';
  robotAntenaRight.style.backgroundColor = 'grey';
}
function antenaChange1(){
  robotAntenaLeft.style.backgroundColor = '#FF00E7';
  robotAntenaRight.style.backgroundColor = '#FFE000';
}
function antenaChange2(){
   robotAntenaLeft.style.backgroundColor = '#8CFF00';
  robotAntenaRight.style.backgroundColor = '#00F9FF';
}

function orejaChange(){
  robotOrejaLeft.style.backgroundColor = '#FF001F';
  robotOrejaRight.style.backgroundColor = '#FF001F';
}
function antenaChange3(){
  robotAntenaLeft.style.backgroundColor = '#FF001F';
  robotAntenaRight.style.backgroundColor = '#FF001F';
}
let interval1;
let interval2;
let interval3;
let interval4;
let interval5;
let interval6;
let interval7;

const intervalHello = () => {
interval1 = setInterval(antenaChange1, 1000);
interval2 = setInterval(antenaChange2, 2000);
clearInterval(interval3);
clearInterval(interval4);
clearInterval(interval5);
clearInterval(interval6);
clearInterval(interval7);
}

const intervalHappy = () => {
interval3 = setInterval(antenaChange2, 1000);
interval4 = setInterval(backToNormal, 2000);
clearInterval(interval1);
clearInterval(interval2);
clearInterval(interval5);
clearInterval(interval6);
clearInterval(interval7);
}
const intervalMad = () => {
interval5 = setInterval(orejaChange, 1000);
interval6 = setInterval(antenaChange3, 1000);
interval7 = setInterval(backToNormal1, 2000);
clearInterval(interval1);
clearInterval(interval2);
clearInterval(interval3);
clearInterval(interval4);
}
const intervalSorry = () => {
clearInterval(interval3);
clearInterval(interval4);
clearInterval(interval1);
clearInterval(interval2);
clearInterval(interval5);
clearInterval(interval6);
clearInterval(interval7);
}
const intervalBye = () => {
  clearInterval(interval3);
clearInterval(interval4);
clearInterval(interval1);
clearInterval(interval2);
clearInterval(interval5);
clearInterval(interval6);
clearInterval(interval7);
}


//=================== HELLO =============================

function sayHello(){
  let string = iterate(helloMsg);
robotTalkingBox.innerHTML = string;
intervalHello();
//let interval1 = setInterval(antenaChange1, 1000);
//let interval2 = setInterval(antenaChange2, 2000);
 robotPupilaLeft.style.width = '10px';
  robotPupilaRight.style.width = '10px';
  robotPupilaLeft.style.height = '10px';
  robotPupilaRight.style.height = '10px';
  robotPupilaLeft.style.backgroundColor = 'black';
  robotPupilaRight.style.backgroundColor = 'black';
  robotPupilaLeft.style.left = '19px';
  robotPupilaRight.style.left = '46px';
  robotPupilaLeft.style.top = '59px';
  robotPupilaRight.style.top = '59px';
  robotOrejaLeft.style.backgroundColor = 'grey';
robotOrejaRight.style.backgroundColor = 'grey';
   document.getElementById('arm-right').style.top = '117px';
  document.getElementById('arm-right').style.left = '62px';
  document.getElementById('arm-right').style.height = '50px';
  buttonHello.style.visibility = 'hidden';
  buttonSorry.style.visibility = 'hidden';
  buttonBye.style.visibility = 'visible';
  buttonHappy.style.visibility = 'visible';
  buttonMad.style.visibility = 'visible';
}
buttonHello.addEventListener('click', sayHello);


// ========== HAPPY ==== JUMP =====================

function happy(){
let string = iterate(happyMsg);
robotTalkingBox.innerHTML = string;
intervalHappy();
//let interval3 = setInterval(antenaChange2, 1000);
//let interval4 = setInterval(backToNormal, 2000);
 robotPupilaLeft.style.width = '10px';
  robotPupilaRight.style.width = '10px';
  robotPupilaLeft.style.height = '10px';
  robotPupilaRight.style.height = '10px';
  robotPupilaLeft.style.backgroundColor = 'black';
  robotPupilaRight.style.backgroundColor = 'black';
  robotPupilaLeft.style.left = '19px';
  robotPupilaRight.style.left = '46px';
  robotPupilaLeft.style.top = '59px';
  robotPupilaRight.style.top = '59px';
  document.getElementById('arm-right').style.top = '117px';
  document.getElementById('arm-right').style.left = '62px';
  document.getElementById('arm-right').style.height = '50px';
  buttonHappy.style.visibility = 'hidden';
  buttonMad.style.visibility = 'visible';
  buttonBye.style.visibility = 'visible';
}
buttonHappy.addEventListener('click', happy);


function jump(){
document.getElementById('leg-right').style.height = '30px';
document.getElementById('leg-left').style.height = '30px';
document.getElementById('arm-left').style.top = '115px';
document.getElementById('arm-right').style.top = '115px';
}
function noJump(){
document.getElementById('leg-right').style.height = '50px';
document.getElementById('leg-left').style.height = '50px';
document.getElementById('arm-left').style.top = '117px';
document.getElementById('arm-right').style.top = '117px';
}
document.getElementById('body').addEventListener('mousedown', jump);
document.getElementById('body').addEventListener('mouseup', noJump);

// ========== MAD ==================

function mad(){
  let string = iterate(madMsg);
robotTalkingBox.innerHTML = string;
  robotPupilaLeft.style.height = '5px';
  robotPupilaLeft.style.width = '5px';
  robotPupilaRight.style.height = '5px';
  robotPupilaRight.style.width = '5px';
  robotPupilaLeft.style.left = '21.4px';
  robotPupilaLeft.style.top = '61px';
  robotPupilaRight.style.left = '48.4px';
  robotPupilaRight.style.top = '61px';
  robotPupilaLeft.style.backgroundColor = 'red';
  robotPupilaRight.style.backgroundColor = 'red';
 intervalMad();
  //let interval5 = setInterval(orejaChange, 1000);
  //let interval6 = setInterval(antenaChange3, 1000);
  //let interval7 = setInterval(backToNormal1, 2000);
 buttonSorry.style.visibility = 'visible';
buttonHello.style.visibility = 'hidden';
buttonHappy.style.visibility = 'hidden';
document.getElementById('arm-right').style.top = '117px';
  document.getElementById('arm-right').style.left = '62px';
  document.getElementById('arm-right').style.height = '50px';
  buttonMad.style.visibility = 'hidden';
}
buttonMad.addEventListener('click', mad);


// ========== SORRY ================================

function sorry(){
  let string = iterate(sorryMsg);
robotTalkingBox.innerHTML = string;
 intervalSorry();
  buttonSorry.style.visibility = 'hidden';
  //clearInterval(interval5);
  //clearInterval(interval6);
  //clearInterval(interval7);
  robotPupilaLeft.style.width = '10px';
  robotPupilaRight.style.width = '10px';
  robotPupilaLeft.style.height = '10px';
  robotPupilaRight.style.height = '10px';
  robotPupilaLeft.style.backgroundColor = 'black';
  robotPupilaRight.style.backgroundColor = 'black';
  robotPupilaLeft.style.left = '19px';
  robotPupilaRight.style.left = '46px';
  robotPupilaLeft.style.top = '59px';
  robotPupilaRight.style.top = '59px';
  robotAntenaLeft.style.backgroundColor = 'grey';
  robotAntenaRight.style.backgroundColor = 'grey';
 robotOrejaLeft.style.backgroundColor = 'grey';
robotOrejaRight.style.backgroundColor = 'grey';
document.getElementById('arm-right').style.top = '117px';
  document.getElementById('arm-right').style.left = '62px';
  document.getElementById('arm-right').style.height = '50px';
  buttonHappy.style.visibility = 'visible';
  buttonMad.style.visibility = 'visible';
  buttonBye.style.visibility = 'visible';
}
buttonSorry.addEventListener('click', sorry);

// ============== BYE BYE ===========================

function bye(){
  let string = iterate(byeMsg);
robotTalkingBox.innerHTML = string;
  document.getElementById('arm-right').style.top = '70px';
  document.getElementById('arm-right').style.left = '65px';
  document.getElementById('arm-right').style.height = '65px';
  robotOrejaLeft.style.backgroundColor = 'grey';
robotOrejaRight.style.backgroundColor = 'grey';
   robotAntenaLeft.style.backgroundColor = 'grey';
  robotAntenaRight.style.backgroundColor = 'grey';
  buttonHello.style.visibility = 'visible';
  buttonBye.style.visibility = 'hidden';
  buttonHappy.style.visibility = 'visible';
  buttonMad.style.visibility = 'visible';
  intervalBye();
}
buttonBye.addEventListener('click', bye);