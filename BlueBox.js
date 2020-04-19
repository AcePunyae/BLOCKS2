class BlueBox {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("Blue");
    rect(pos.x, pos.y, this.width, this.height);
    if(this.body.speed < 3){
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
       
     }
     
   }
  Score(){
    if(this.Visibility<0 && this.Visibility> -800){
    score=score+1
    console.log(score)
    }
  }
}