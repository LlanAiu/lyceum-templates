// builtin

// external

// internal
import type { Tile } from "./types";

const COLORS = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "turquoise"];

export function getInitialTiles(): Tile[] {
    const shuffledColors: string[] = shuffle([...COLORS, ...COLORS]);

    const tiles: Tile[] = shuffledColors.map((color, index) => (
        {
            index,
            color,
            matched: false,
            revealed: false
        }
    ));

    return tiles;
}


function shuffle(colors: string[]): string[] {
    const copy: string[] = [...colors];
    for (let i = 0; i < copy.length; i++) {
        const chosenIndex: number = randInt(i, copy.length);
        const toSwap: string = copy[i];

        copy[i] = copy[chosenIndex];
        copy[chosenIndex] = toSwap;
    }

    return copy;
}

// inclusive min, exclusive max
function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}