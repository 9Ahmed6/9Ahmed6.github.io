export function detectCollision(ball, gameObject) {
    let bottomBall = ball.position.y + ball.size;
    let topBall = ball.position.y;
    
    let topGameObject = gameObject.position.y;
    let bottomGameObject = gameObject.position.y + gameObject.height;
    let leftGameObject = gameObject.position.x;
    let rightGameObject = gameObject.position.x + gameObject.width;

    if (bottomBall >= topGameObject
        && topBall <= bottomGameObject
        && ball.position.x >= leftGameObject
        && ball.position.x + ball.size <= rightGameObject) {
        return true;
    } else {
        return false;
    }
}