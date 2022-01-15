camera="";
function setup(){
      camera=createCapture(VIDEO);
      canvas=createCanvas(480,430);
      canvas.center();
      objectDetector=ml5.objectDetector('cocossd',modelLoaded);
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
