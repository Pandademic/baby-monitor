camera="";
status="";
function setup(){
      camera=createCapture(VIDEO);
      canvas=createCanvas();
      canvas.center();
      objectDetector=ml5.objectDetector('cocossd',modelLoaded)
}
function draw(){
    image(camera,0,0,480,380);
}
function modelLoaded(){
    console.log("Coco is here for Babysitting dutys");
    status=true;
    objectDetector.detect(camera,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
   }
}
