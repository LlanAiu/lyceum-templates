// TODO: wrangle this
const COLORS = ["red", "orange", "yellow", "green", "turquoise", "blue", "indigo", "violet"]
const TOTAL_TILES = 16;

const restartButton = document.getElementById("restart");
const moves = document.getElementById("moves");

let matched = 0;
let moveCount = 0;

let currentTurnRevealed = 0;
let currentSelected = [];

let tiles = [];

function initGame() {
    initState();

    const allColors = COLORS.concat(COLORS);
    const colorOrder = shuffle(allColors);

    for (let i = 0; i < 16; i++) {
        const ref = setupTile(i, colorOrder[i]);
        tiles[i] = {
            ref,
            flipped: false,
            matched: false,
            color: colorOrder[i]
        };
    }
}

function initState() {
    moves.textContent = "Moves: 0";
    moveCount = 0;
    matched = 0;
    currentTurnRevealed = 0;
    currentSelected = [];
    tiles = [];
}

function shuffle(colors) {
    const copy = [...colors];
    for (let i = 0; i < copy.length; i++) {
        const chosenIndex = randInt(i, copy.length);
        const toSwap = copy[i];

        copy[i] = copy[chosenIndex];
        copy[chosenIndex] = toSwap;
    }

    return copy;
}

// inclusive min, exclusive max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

function setupTile(index, color) {
    const tile = document.getElementById(index);
    tile.className = "tile hidden";
    tile.style.setProperty("--tile-color", color);
    tile.addEventListener("click", () => revealTile(index));
    return tile;
}

function revealTile(index) {
    if (canFlip(index)) {
        tiles[index].flipped = true;
        tiles[index].ref.className = "tile revealed";
        currentTurnRevealed++;
        currentSelected.push(index);
        if (currentTurnRevealed === 2) {
            checkPair();
        }
    }
}

function canFlip(index) {
    return currentTurnRevealed < 2 && !tiles[index].flipped && !tiles[index].matched;
}

function checkPair() {
    if (isMatch()) {
        setTimeout(() => {
            matchTile(currentSelected.pop());
            matchTile(currentSelected.pop());
            handleCheckWin();
        }, 250);
    } else {
        setTimeout(() => {
            hideTile(currentSelected.pop());
            hideTile(currentSelected.pop());
            incrementMoves();
        }, 500);
    }

}

function isMatch() {
    return tiles[currentSelected[0]].color === tiles[currentSelected[1]].color;
}

function matchTile(index) {
    tiles[index].flipped = true;
    tiles[index].matched = true;
    tiles[index].ref.className = "tile matched";
    currentTurnRevealed--;
    matched++;
}

function handleCheckWin() {
    if (matched === TOTAL_TILES) {
        moveCount++;
        moves.textContent = `You won in ${moveCount} moves!`;
    } else {
        incrementMoves();
    }
}

function hideTile(index) {
    tiles[index].flipped = false;
    tiles[index].ref.className = "tile hidden";
    currentTurnRevealed--;
}

function incrementMoves() {
    moveCount++;
    moves.textContent = `Moves: ${moveCount}`;
}


initGame();

restartButton.addEventListener("click", initGame);
