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
        const moves = [
            [this.x = x + 1, this.y = y + 2],
            [this.x = x + 1, this.y = y - 2],
            [this.x = x - 1, this.y = y + 2],
            [this.x = x - 1, this.y = y - 2],
            [this.x = x + 2, this.y = y + 1],
            [this.x = x + 2, this.y = y - 1],
            [this.x = x - 2, this.y = y + 1],
            [this.x = x - 2, this.y = y - 1]
        ];
    };
};

let zero = new Node(0, 0);

let pastMove = [];

function storedMove(node) {
    pastMove.push(node);
    console.log(pastMove);
    return pastMove;
};
storedMove(zero);

