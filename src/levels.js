import Brick from "./brick.js";

let bricks = [];
export function buildLevel(game, level) {
    level.forEach((row, rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if (brick === 1) {
                let position = {
                    x: brickIndex * 80,
                    y: 60 + rowIndex * 70
                };
                bricks.push(new Brick(game, position));
            }
        }) 
    });
    return bricks;
}
export const level1 = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
];

export const level2 = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
export const level3 = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


