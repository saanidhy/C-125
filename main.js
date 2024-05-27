left_wrist_x=0;
right_wrist_x=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);

    canvas=createCanvas(500,500);
    canvas.position(410,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#f08080');
    textSize(difference);
    fill("blue");
    text("Saanidhya",50,200);
}

function modelLoaded(){
    console.log("poseNet is Ready");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        right_wrist_x=results[0].pose.rightWrist.x;
        difference=floor(left_wrist_x-right_wrist_x);
        console.log("left_wrist_x="+left_wrist_x);
        console.log("right_wrist_x="+right_wrist_x);
        console.log("difference="+difference);
    }
}