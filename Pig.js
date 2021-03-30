class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,250,250);
    this.image = loadImage("Ravan-PNG-File.png");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 2){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 250, 250);
     pop();
   }
   
 }



};