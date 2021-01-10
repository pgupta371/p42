class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.rain = Bodies.circle(x, y, 10, options);
          World.add(world, this.rain);
    }
   
    update(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0, 650), y:random(0, 650)});
      }
    }
  
    display(){
       var pos = this.rain.position;
      fill("blue");
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, 10)
    }
  
  
  }