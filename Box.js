class Box {
    constructor(x, y) {
        this.body = Bodies.rectangle(x, y, 100, 100);
        this.width = 100;
        this.height = 100;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}