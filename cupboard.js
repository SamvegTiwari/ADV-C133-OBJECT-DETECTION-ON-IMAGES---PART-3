status=""
OBJECTS=[];
imgs=""


function preload(){
imgs=loadImage("https://5.imimg.com/data5/NK/RD/MY-8946719/wooden-wall-cabinet-500x500.jpg");
}

function setup(){
 canvas=createCanvas(500,400);
 canvas.position(500,250);
 O_D=ml5.objectDetector('cocossd', model_loaded);
 document.getElementById("statuss1").innerHTML="status detecting objects";
}



function model_loaded(){
 console.log("Model has loaded");
 status=true;
 O_D.detect(imgs, got_results);
  
}

function got_results(error, results){
 if(error){
 console.error(error);
 }   
 else{
     console.log(results);
     OBJECTS=results;
    }
}

function draw(){
    image(imgs, 0, 0, 500, 500);
      

    if(status !=""){
      for(i=0;i<OBJECTS.length;i++){
      document.getElementById("statuss").innerHTML="Status:Object detected";
      percentage=floor(OBJECTS[i].confidence*100);
      fill("red");
      textSize(20);
      text(OBJECTS[i].label+" "+percentage+"%", OBJECTS[i].x, OBJECTS[i].y);
      noFill();
      R=Math.random()*255;
      G=Math.random()*255;
      B=Math.random()*255   
      stroke(R, G, B);
      rect(OBJECTS[i].x, OBJECTS[i].y, OBJECTS[i].width, OBJECTS[i].height);
      }
     }
  }
  
  function back(){
    window.location="index.html";
  }