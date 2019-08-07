import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import { buildLevel, level1, level2, level3 } from './levels.js';

const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
};

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.tries = 3;
        this.bricks = [];
        this.levels = [level1, level2, level3];
        this.currentLevel = 0;
        new InputHandler(this.paddle, this);
        this.gameObjects = [];
        this.gameState = GAME_STATE.MENU;
    }

    start() {
        if (this.gameState !== GAME_STATE.MENU && this.gameState !== GAME_STATE.NEWLEVEL) return;
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.gameObjects = [
            this.paddle, 
            this.ball
        ];
        this.ball.reset();
        this.gameState = GAME_STATE.RUNNING;
    }

    draw(context) {
        [...this.gameObjects, ...this.bricks].forEach((obj) => obj.draw(context));
        context.font = "10px 'Press Start 2P'";
        context.fillStyle = "white";
        context.textAlign = "left";
        context.fillText(`Press SPACE to pause`, 20, 20);
        context.fillText(`Lives: ${this.tries}`, 700, 20);
        context.textAlign = "center";
        context.fillText(`Level: ${this.currentLevel + 1}`, 400, 20);

        if (this.gameState === GAME_STATE.PAUSED) {
            context.fillStyle = "rgba(0, 0, 0, 0.5)";
            context.fillRect(0, 0, this.gameWidth, this.gameHeight);
            context.font = "30px 'Press Start 2P'";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2); 
        }
        if (this.gameState === GAME_STATE.MENU) {
            context.fillStyle = "blueviolet";
            context.fillRect(0, 0, this.gameWidth, this.gameHeight);
            context.font = "30px 'Press Start 2P'";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Press ENTER to start", this.gameWidth / 2, this.gameHeight / 2); 
        }
        if (this.gameState === GAME_STATE.GAMEOVER) {
            context.fillStyle = "black";
            context.fillRect(0, 0, this.gameWidth, this.gameHeight);
            context.font = "30px 'Press Start 2P'";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2); 
        }
    }

    update(deltaTime) {
        if (this.gameState === GAME_STATE.PAUSED
            || this.gameState === GAME_STATE.MENU
            || this.gameState === GAME_STATE.GAMEOVER
            ) return;
        if (this.tries === 0) {
            this.gameState = GAME_STATE.GAMEOVER;
        }
        if (this.bricks.length === 0) {
            this.currentLevel++;
            this.gameState = GAME_STATE.NEWLEVEL;
            this.start();
        }
        [...this.gameObjects,...this.bricks].forEach((obj) => obj.update(deltaTime));
        this.bricks = this.bricks.filter(brick => !brick.markForDeletion);
    }

    togglePause() {
        if (this.gameState == GAME_STATE.RUNNING) {
            this.gameState = GAME_STATE.PAUSED;
        } else if (this.gameState == GAME_STATE.PAUSED) {
            this.gameState = GAME_STATE.RUNNING;
        }
    }
}