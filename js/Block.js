class Block{
    constructor(x, y, width, height) {
      var ground_options={
       restitution : 0.4
      }
    
      this.body = Bodies.rectangle(x,y,width,height,ground_options)
      this.width=width
      this.height=height
      World.add(world,this.body);
        
      }
      display(){
        if (this.body.speed<3){

        
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        }
        else{World.remove(world,this.body)}
      }
}