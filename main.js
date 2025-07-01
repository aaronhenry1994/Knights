console.log("Hello world!")

class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
};

//Push to github ASAP

class legalMoves {
    constructor(x, y) {
        this.moves = [
            [x + 1, y + 2],
            [x + 1, y - 2],
            [x - 1, y + 2],
            [x - 1, y - 2],
            [x + 2, y + 1],
            [x + 2, y - 1],
            [x - 2, y + 1],
            [x - 2, y - 1]
        ];
        this.borders = [
            [8, y],
            [x, 8],
            [-1, y],
            [x, -1]
        ];
        this.goal = [
            [7, y],
            [x, 7]
        ];
    };
};

class moves {
    constructor(x, y) {
        const pastMoves = [];
    };
};

let pastMoves = [];
let knight = new Node(0, 0);
console.log(knight);

function calculateMoves(x, y) {

    let turn = new legalMoves(x, y);

    console.log(turn.moves);

    const randomMove = (array) => array[Math.floor(Math.random() * turn.moves.length)];
    knight = randomMove(turn.moves);
    
    if (turn.borders.some(border => knight[0] === border[0] && knight[1] === border[1])) {
        calculateMoves(x, y);
    };

    return knight;
};

function chainMoves(x, y) {

    let finish = 'You have made it to the goal';

    let move = calculateMoves(x, y);
    console.log(move)

    let turn = new legalMoves(x, y);

    pastMoves.push(move);

    if (turn.goal.some(goal => move[0] === goal[0] && move[1] === goal[1])) {
        return [finish, pastMoves];
    } else {
        chainMoves(move[0], move[1]);
    };

};

let move = chainMoves(knight.x, knight.y);
console.log(pastMoves);
console.log(move);