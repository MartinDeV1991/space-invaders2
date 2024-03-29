class Player {
    constructor(game) {
        this.game = game;
        this.width = 140;
        this.height = 120;
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
        this.speed = 5;

        this.image = document.getElementById('player');
        this.jets_image = document.getElementById('player_jets');
        this.frameX = 0;
        this.jetsFrame = 1;
    }

    draw() {
        this.game.ctx.drawImage(this.jets_image, this.jetsFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        this.game.ctx.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update() {
        const playerCenterX = this.x + this.width / 2;
        if (this.game.keys.indexOf('ArrowLeft') > -1 || this.game.touchX < playerCenterX - 5) {
            this.x -= this.speed;
            this.jetsFrame = 0;
        } else if (this.game.keys.indexOf('ArrowRight') > -1 || this.game.touchX > playerCenterX + 5) {
            this.x += this.speed;
            this.jetsFrame = 2;
        } else {
            this.jetsFrame = 1;
        }

        if (this.x < -this.width * 0.5) this.x = -this.width * 0.5;
        else if (this.x > this.game.width - this.width * 0.5) this.x = this.game.width - this.width * 0.5;
    }

    shoot() {
        const projectile = this.game.getProjectile();
        if (projectile) projectile.start(this.x + this.width * 0.5, this.y);
    }

    restart() {
        this.x = this.game.width * 0.5 - this.width * 0.5;
        this.y = this.game.height - this.height;
    }
}