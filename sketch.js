const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var time;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    fill("black");
    textSize(30);
    text ("Time:  " + time , 50,100)
    

}


    async function getBackgroundImg(){

    

        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,16);
        var time = datetime.slice(11,16);

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
    }
