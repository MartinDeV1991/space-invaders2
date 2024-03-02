
class Projectile {
    constructor(game) {
        this.game = game;
        this.width = 3;
        this.height = 40;
        this.x = 0;
        this.y = 0;
        this.speed = 20;
        this.free = true;
    }

    draw() {
        if (!this.free) {
            this.game.ctx.save();
            this.game.ctx.fillStyle = 'gold';
            this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
            this.game.ctx.restore();

        }
    }

    update() {
        if (!this.free) {
            this.y -= this.speed;
            if (this.y < -this.height) this.reset();
        }
    }

    start(x,y) {
        this.x = x - this.width * 0.5;
        this.y = y;
        this.free = false;
    }

    reset() {
        this.free = true;
    }
}