class Projectile{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10,
        }
        this.pointB =pointB;
        this.body = constraint.create(options);
        World.add(world,this.body);
    }
    release(){
        this.body.bodyA = null;
    }
    display(){
        if (this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            line(pointA.x,pointB.x,pointA.y,pointB.y);
        
        }
    }
}