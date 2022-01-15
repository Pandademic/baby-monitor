camera="";
function setup(){
      camera=createCapture(VIDEO);
      camera.hide();
      canvas=createCanvas();
      canvas.center();
      objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function draw(){
    image(camera,0,0,480,380);
}
function modelLoaded(){
    console.log("Coco is here for Babysitting dutys");
    objectDetector.detect(camera,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
          if(results[0] != "person"){
               document.getElementById("header").innerHTML="BABY LEFT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
               document.getElementById("title").innerHTML="! BABY gone !";
          }
          else {
              document.getElementById("header").innerHTML="Nothing abnormal";
              document.getElementById("title").innerHTML="Everything's OK";
          }
   }
}
