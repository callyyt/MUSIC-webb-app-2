bara_time_song= "";
ham_star_song= "";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 600, 530);
}

function preload()
{
    bara_time_song = loadSound("ham_star.mp3");
    ham_star_song = loadSound("bara_time.mp3");
}

function modelLoaded()
{
    console.log('poseNet is initialized yipee!')
}

function gotPoses(results)
{
   if(results.length > 0)
   {
     console.log(results);

     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

     rightWristX =  results[0].pose.rightWrist.x;
     rightWristY =  results[0].pose.rightWrist.y;
     console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
   }
}
