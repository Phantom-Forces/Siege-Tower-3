class Block{
    constructor(x, y, width, height) {
      this.blockImage=loadImage("block.png");
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.visibility=225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed <3) {
          image(this.blockImage,pos.x,pos.y,this.width,this.height);
        }
        else {
          World.remove(world,this.body)
          push();
          this.visiblity=this.visibility-5;
          tint(255,this.visibility);
          image(this.blockImage,pos.x,pos.y,this.width,this.height);
        pop();
        }
      }
}