class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.01,
      }
      this.visiblity=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed <3){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -5;
      tint(255, this.visibility);
      //image(this.image, 0,-this.height/2,this.Width,this.height)
      image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
      pop();
      
      }
    
    }
}