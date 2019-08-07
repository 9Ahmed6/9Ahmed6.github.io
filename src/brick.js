import { detectCollision } from './collisionDetection.js';
export default class Brick {
    constructor(game, position) {
        this.game = game;
        this.brick = document.getElementById("img-brick");
        this.position = {
            x: position.x,
            y: position.y
        };
        this.width = 100;
        this.height = 107;
        this.markForDeletion = false;
    }

    draw(context) {
        context.drawImage(
            this.brick, 
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
            );
    }
    update() {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markForDeletion = true;
        }
    }
}