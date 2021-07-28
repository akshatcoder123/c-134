
var status="";
var floor111="";
array=[];
var r,g,b;

function preload(){
    song=loadSound("astronaut.mp3");
    }





    function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    
    coco=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="detecting objects";
    }

function modelloaded(){
    console.log("henlo");
status="true";


}

function Gotresult(error,results){
if(error){
    console.log(error);
}
else{
console.log(results);
array=results;
}

}

function draw(){
    image(video,0,0,480,380);

    if(status=="true"){
        r=random(255);
        g=random(255);
        b=random(255);
        coco.detect(video,Gotresult);
        for(i=0; i<array.length; i++){
        document.getElementById("status").innerHTML="objects detected";       
            document.getElementById("objects1").innerHTML=array.length;
            floor111=floor(array[i].confidence*100);

            text(array[i].label+" "+floor111+"%",array[i].x+10,array[i].y+10);
            noFill();
            stroke(r,g,b);
            rect(array[i].x,array[i].y,array[i].width,array[i].height);
            
            if (array[i].label=="person"){
                 document.getElementById("objects").innerHTML="baby found";
                 song.stop();
            }
           else{
               
            document.getElementById("objects").innerHTML="baby not found";
            song.play();

           }
           
           
            
            
            }
            
       


            if(array.length==0){
                document.getElementById("objects").innerHTML="baby not found";
                        song.play();
            
            }
       
        }



       
} 
//setInterval(draw(),100);
