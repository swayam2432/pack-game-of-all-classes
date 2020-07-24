class Chain {
    constructor(body1, body2) {
        var option1 = {
            bodyA: body1,
            bodyB: body2,
            length: 10,
            stiffness: 0.02
        }
        this.chain = Constraint.create(option1);
        World.add(world, this.chain);
    }

    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("blue");
        fill("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}