//Create variables here
var dog , happyDog , database , foodS , foodStock ;
var dogImg , dogImg2 ;
var bgImg ; 

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
  bgImg = loadImage("colour texture.jpg");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  dog = createSprite(250,350,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.25;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(bgImg);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  drawSprites();
  //add styles here
  textSize(16);
  stroke(0);
  fill(0);
  text("𝗣𝗿𝗲𝘀𝘀 𝗨𝗣 𝗔𝗥𝗥𝗢𝗪 𝗸𝗲𝘆 𝗳𝗼𝗿 𝗳𝗲𝗲𝗱𝗶𝗻𝗴 𝗧𝗼𝗺𝗺𝘆 𝗺𝗶𝗹𝗸.", 100, 50);
  text("𝓕𝓸𝓸𝓭 𝓢𝓽𝓸𝓬𝓴 𝓵𝓮𝓯𝓽: "+ foodS, 100, 100);
}

function readStock(data){
  foodS=data.val();
  console.log(foodS)
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



