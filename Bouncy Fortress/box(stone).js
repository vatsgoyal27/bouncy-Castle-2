class stone {

    constructor(x, y, width, height) {
        var options ={
            restitution: 1,
            mass: 2
        }
        this.x
        this.y
        this.width
        this.height
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
        display() {
            var pos = this.body.position;
            rectMode(CENTER);
            fill("grey");
            stroke("black");
            rect(pos.x, pos.y, this.width, this.height);
    
        }
    }