let song;

let volumeSlider;

let playColor; // color(0,255,0);
let stopColor; // color(255,0,0);

//a variable to store current background color
let bgColor;

function preload(){
    song = loadSound('sounds/waterSound.mps3');
}

function setup() {
  createCanvas(600, 200);

  //define colors play:green R0 G255 B0 stop:red R255 G0 B0
  playColor = color(0,255,0);
  stopColor = color(255,0,0);
  
  bgColor = stopColor; //set default bgColor to stopColor
  
    volumeSlider = createSlider(0,100,0);
  volumeSlider.position = (400,400);
  volumeSlider.style('width','255px');
  song.play();

}

function draw(){
   background(bgColor);
  song.setVolume(volumeSlider.value()/100);
}
