camera="";
status="";
function setup(){
        canvas=createCapture(VIDEO);
        canvas.center();
}
function draw(){
    image(camera,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}
function modelLoaded(){
    console.log("Coco is here for Babysitting dutys");
    status=true;
     
}
