class Polygon{
    constructor(x,y){
          this.body = Bodies.rectangle(x, y, 10, 10);
          this.image = loadImage("polygon.png");
          World.add(world,this.body);
    }
    display(){
        noStroke();
        fill(188,67,67);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 70, 70);
    }
}