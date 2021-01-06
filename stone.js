class Stone{

constructor(x,y,width,height){
     
    var a = {
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,a)

      this.width = width;
      this.height = height;
      this.image = loadImage("pm/stone.png")
      World.add(world,this.body)
    

}


display(){


imageMode(CENTER)
fill("black")
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
}


}