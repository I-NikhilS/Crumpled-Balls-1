class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:.5,
          density:1.2
      }
      this.body = Bodies.ellipse(56, 46, 55, 55, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      rectMode(CENTER);
      fill("limegreen");
      translate(pos.x,pos.y);
      rotate(angle);
      rect(0, 0,this.width, this.height);
      console.log(angle);
      pop();
    }
  }
  