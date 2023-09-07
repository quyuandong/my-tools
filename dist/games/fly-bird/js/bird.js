class Bird {
    constructor() {
        this.w = game.allImg["bird0_0"].width
        this.h = game.allImg["bird0_0"].height
        this.x = game.canvas.width / 2 - this.w / 2;
        this.y = game.canvas.height * (1 - 0.618);
        this.wing = 0;
        this.changeY = 0
        this.rotate = 0
        this.status = 'drop'
    }
    update() {
        if (this.status === 'drop') {
            this.changeY += 0.4
            this.y += this.changeY
            this.rotate += 0.08
        } else if (this.status === 'up') {
            this.changeY -= 0.6;
            this.changeY <= 0 ? this.status = "drop" : null;
            this.y -= this.changeY;
            this.y <= 0 ? this.y = 0 : null;
            this.wing >= 2 ? this.wing = 0 : this.wing++;
        }
        if (this.y >= game.canvas.height - game.allImg["land"].height) {
            this.y = game.canvas.height - game.allImg["land"].height
        }
        // 34乘24
        this.x1 = this.x -17
        this.x2 = this.x + 17
        this.y1 = this.y -12
        this.y2 = this.y +12
    }
    render() {
        game.draw.save();
        game.draw.translate(this.x, this.y);
        game.draw.rotate(this.rotate);
        game.draw.drawImage(game.allImg["bird0_" + this.wing], -24, -24);
        game.draw.restore();
    }
    fly() {
        this.changeY = 6;
        this.rotate = -1.2;
        this.status = "up";
    }
}