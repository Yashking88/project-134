status = "";
AC_image = "";
objects=[]


function setup(){
    canvas = createCanvas(380,380);
   canvas.center()
    video=createCapture(VIDEO)
    video.size(380,380)
    video.hide()
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Baby";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
objects=results
}

function draw(){
    image(video,0,0,380,380);
    
    if (status!="") {
    
         
  
          
      
        object_Detector.detect(video,gotResults);
        for (let index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML="status:Baby_detcted"   
            document.getElementById("noo").innerHTML="numberofobject="+objects.length
            fill("red")
            percent=floor(objects[index].confidence*100)
            text(objects[index].label+" "+percent+"%",objects[index].x,objects[index].y)
            noFill()
            stroke("red")
            rect(objects[index].x-15,objects[index].y,objects[index].width,objects[index].height)
        }
    }
}