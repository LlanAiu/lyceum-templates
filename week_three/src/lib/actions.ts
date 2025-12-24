// builtin

import type { Tile } from "./types";

// external

// internal


export function revealTile(tiles: Tile[], index: number): Tile[] {
    const changed = tiles.map((tile) => {
        if (tile.index === index) {
            return { ...tile, revealed: true };
        }
        return tile;
    });

    return changed;
}

export function hideTiles(tiles: Tile[], indices: number[]): Tile[] {
    const changed = tiles.map((tile) => {
        if (indices.includes(tile.index)) {
            return { ...tile, revealed: false };
        }
        return tile;
    });

    return changed;
}

export function matchTiles(tiles: Tile[], indices: number[]): Tile[] {
    const changed = tiles.map((tile) => {
        if (indices.includes(tile.index)) {
            return { ...tile, matched: true };
        }
        return tile;
    });

    return changed;
}