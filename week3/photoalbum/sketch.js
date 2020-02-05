let nextButton;
let prevButoon;

let currentimage = 0;


let image_filelist = ["images/apples.jpeg","images/bananas.jpeg", "images/oranges.jpeg"]
let imagelist =[];

function preload(){
  
  for(let filename of image_filelist){
    imagelist.push(loadImage(filename));
  
  }
  print(imagelist.length+"images loaded into imagelist");
}

function setup() {
  createCanvas(600,400);
  prevButton = createButton('prev');
  prevButton.mousePressed(prev);
  
  nextButton = createButton('next');
  nextButton.mousePressed(next);
  
  
}

function draw() {
  background(220);

  show();
  
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    next();
  }
  else if (keyCode === LEFT_ARROW){
    prev();
  }
}

function show(){
image(imagelist[currentimage],0,0);
}

function next(){
  currentimage = currentimage +1;
  if (currentimage>imagelist.length-1){
    currentimage = 0;
  }
  print("the next image is" + currentimage);
}

function prev(){
  currentimage = currentimage -1;
  if (currentimage<0){
    currentimage = imagelist.length-1;
  }
  print("the next image is" + currentimage);
}

