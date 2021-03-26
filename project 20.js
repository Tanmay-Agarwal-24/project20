 
var car , wall,speed,weight;



function setup() {
  createCanvas(1500, 400);
  car =createSprite(50,200,50,50);
  wall=createSprite(800,200,30,height/2)
  
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;
  
  
   
}

function draw() {
  background("black");
  
  
  
  if (wall.x-car.x<((wall.width+car.width)/2))
  {
    car.velocityX=0;
     var Deformation=0.5*weight*speed*speed/22500
     if (Deformation>180)
     {
    car.shapeColor = ("red") ;
    
    }
      
      if (Deformation<180 && Deformation>100)
      {
        car.shapeColor= ("yellow");
      }
        
        if (Deformation<100)
        {
         
          car.shapeColor= ("green");
        }
          }
        
          
  
  
  
  drawSprites();
  
   
      }


 