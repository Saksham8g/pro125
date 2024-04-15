

function preload() {
  mustache = loadImage('https://i.postimg.cc/cL9Y4KSV/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
  function draw(){

    image(video, 0 , 0, 300, 300 );
    fill(255,0,0);
    stroke(255,0,0);
    circle(mustacheX, mustacheY, 20);

  }

  function take_snapshot(){
   save('myFilterImage.png');
  }

  function modelLoaded() {

    console.log('PoseNet Is Initialized');
  
  }

  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      mustacheX = results[0].mustache.x;
      mustacheY = results[0].mustache.y;
      console.log("mustache x = " + results[0].mustache.x);
      console.log("mustache y = " + results[0].mustache.y);
    }
  }

     
  mustacheX=0;
  mustacheY=0;