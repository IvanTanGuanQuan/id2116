let bulbOn;
let bulbOff;
let brightSlider;

let brightness = 0;


function toggle(){
  if (brightness == 0){
    brightness = 1;
  }
  else { 
    brightness =0;
  }
}

function on(){
  brightness = 1;
  print("the bulb is on!");
}

function off(){
  brightness = 0;
  print("the bulb is off");
}

function mousePressed(){
  //on();
  toggle();
}

function mouseReleased(){
  //off();
}

function preload(){
  
  bulbOn = loadImage("images/bulb_on.png");
  bulbOff = loadImage("images/bulb_off.png");
}

function setup() {
  createCanvas(500, 500);
  
  
  brightSlider = createSlider(0,255,0);
  brightSlider.position = (400,400);
  brightSlider.style('width','255px');
  
}

function draw() {
  background(200);
  
  brightness = brightSlider.value();
  
  
  imageMode(CENTER);
  
  tint(255,brightness);
  image(bulbOn,width/2,height/2,300,300);
  
  tint(255,255-brightness);
  image(bulbOff,width/2,height/2,300,300);
  
  
  
  
  

  
}