status_cocossd = "";

function preload(){
    img = loadImg("Img_1.jpg");
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    status_cocossd = true;
    object_Detector.detect(img, gotResults);
}

function gotResults(results){
    console.log(results);
}