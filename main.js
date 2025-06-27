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
    };
};

class borders {
    constructor(x, y) {
        this.outOfBounds = [
            [8, y],
            [x, 8],
            [-1, y],
            [x, -1]
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


};

calculateMoves(0, 0);