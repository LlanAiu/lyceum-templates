// builtin

// external

// internal
import type { Tile } from "../lib/types";


interface GameTileProps {
    tile: Tile
    onClick: () => void;
}

export default function GameTile({ tile, onClick }: GameTileProps) {
    const color = (tile.revealed) ? tile.color : "bg-slate-400";
    const matched = (tile.matched) ? "border-2 border-green-600" : "";

    return (
        <button type="button" className={`w-20 h-20 rounded-md ${color} ${matched}`} onClick={onClick}>
        </button>
    );
}