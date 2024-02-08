song= "";
song= "";

scoreLeftWrist=0;
scoreRightWrist=0;

rightWristX = 0;
 rightWristY = 0;

 leftWristX = 0;
  leftWristY = 0;


function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

     console.log('poseNet is initialised')
}

function modelLoaded(){
    poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
         console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
    
    
        rightWristX = results[0].pose.rightWrist.x;
         rightWristY = results[0].pose.rightWrist.y;
          console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    
          leftWristX = results[0].pose.leftWrist.x; 
          leftWristY = results[0].pose.leftWrist.y;
           console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
    
    }
    }
    

function draw(){
    image(video,0,0,600,500);
    fill('#FF0000');
}