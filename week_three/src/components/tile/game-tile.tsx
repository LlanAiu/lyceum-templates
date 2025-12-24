// builtin

// external

// internal
import "./game-tile.css";
import type { Tile } from "../../lib/types";


interface GameTileProps {
    tile: Tile
    onClick: () => void;
}

export default function GameTile({ tile, onClick }: GameTileProps) {
    const color = (tile.revealed) ? tile.color : "card-back";
    const matched = (tile.matched) ? "matched" : "";

    return (
        <button type="button" className={`tile ${color} ${matched}`} onClick={onClick}>
        </button>
    );
}