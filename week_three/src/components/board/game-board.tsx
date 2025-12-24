// builtin

// external

// internal
import type { Tile } from "../../lib/types";
import GameTile from "../tile/game-tile";


interface GameBoardProps {
    tiles: Tile[];
    onTileClick: (tile: Tile) => void;
}

export default function GameBoard({ tiles, onTileClick }: GameBoardProps) {
    return (
        <div className="grid grid-cols-4 grid-rows-4 w-max h-max gap-1 p-3 bg-slate-100 rounded-xl">
            {tiles.map((tile) => <GameTile key={tile.index} tile={tile} onClick={() => onTileClick(tile)} />)}
        </div>
    );
}