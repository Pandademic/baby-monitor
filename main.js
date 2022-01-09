camera="";
status="";
function setup(){
      camera=createCapture(VIDEO);
      canvas=createCanavs();
      canvas.center();
      objectDetector=ml5.objectDetector('cocossd',modelLoaded)
}
function draw(){
    image(camera,0,0,480,380);
    objectDetector.detector(video,gotResult);
}
function modelLoaded(){
    console.log("Coco is here for Babysitting dutys");
    status=true;         
}
