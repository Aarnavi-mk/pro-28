class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
                strokeWeight(4);
                stroke(48,22,8)
                line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y);
               
              
            }
        
            
        }
    }
    
}