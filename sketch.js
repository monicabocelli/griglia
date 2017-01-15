function setup() {
  createCanvas(400,400);
}

function draw() {
    //linee orizzontali
 for (var y = 0; y < 400; y+= 25){
        line(0,y,width,y);
  } 
  
    //linee verticali
  for (var x = 0; x < 400; x+= 25){
        line(x,0,x,height);
  } 
  
  // first grid of dots
  for (var cx = 25; cx < width; cx+= 50){  
        for (var cy = 25; cy < height; cy+= 50){    
            noStroke()
            fill(255,255,255);
            ellipse(cx,cy,10);
            ellipse(cx+25,cy+25,10);
        }
  }
}