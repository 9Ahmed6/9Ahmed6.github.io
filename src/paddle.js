export default class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 150;
        this.height = 20;
        this.position = {
            x: game.gameWidth / 2 - this.width /2,
            y: game.gameHeight - this.height - 10
        };
        this.maxSpeed = 200;
        this.speed = 0;
    }

    draw(context) {
        context.fillStyle = "yellow";
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    moveLeft() {
        this.speed = this.maxSpeed;
    }
    moveRight() {
        this.speed = -this.maxSpeed;
    }
    stop() {
        this.speed = 0;
    }
    update(deltaTime) {
        this.position.x -= this.speed / deltaTime;
        if (this.position.x <= 0) {
            this.position.x = 0;
        }
        if (this.position.x >= this.gameWidth - this.width) {
            this.position.x = this.gameWidth - this.width;
        }
    }
}