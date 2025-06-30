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

function calculateMoves(x, y) {

    let knight = new Node(x, y);
    console.log(knight);

    let turn = new legalMoves(knight.x, knight.y);

    console.log(turn.moves);

    const randomMove = (array) => array[Math.floor(Math.random() * turn.moves.length)];
    let final = randomMove(turn.moves);

    return final;
};

calculateMoves(0, 0);
console.log(calculateMoves(0, 0))