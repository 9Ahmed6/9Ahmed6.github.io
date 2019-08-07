'use strict';
import Game from './game.js';

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let lastTime = 0;
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(timeStamp) {
    let deltaTime = lastTime - timeStamp;
    lastTime = timeStamp;
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.draw(context);
    game.update(deltaTime); 
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
