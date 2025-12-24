// builtin

// external
import { useEffect, useState } from "react";

// internal
import "./App.css";
import GameBoard from "./components/board/game-board";
import MoveTracker from "./components/move-tracker/move-tracker";
import RestartButton from "./components/restart-button/restart-button";
import { getInitialTiles } from "./lib/utils";
import type { Tile } from "./lib/types";
import { hideTiles, matchTiles, revealTile } from "./lib/actions";

export default function App() {
    const [tiles, setTiles] = useState<Tile[]>([]);
    const [moves, setMoves] = useState(0);
    const [win, setWin] = useState(false);
    const [revealed, setRevealed] = useState<number[]>([]);

    // biome-ignore lint/correctness/useExhaustiveDependencies: sync to run on revealed change
    useEffect(processPostMove, [revealed]);
    // biome-ignore lint/correctness/useExhaustiveDependencies: sync to run on tile change
    useEffect(checkWin, [tiles]);
    useEffect(initGame, []);

    function initGame() {
        setTiles(getInitialTiles());
        setMoves(0);
        setRevealed([]);
        setWin(false);
    }

    function handleClick(clicked: Tile) {
        if (canClick(clicked)) {
            setRevealed((nums) => [...nums, clicked.index]);
            setTiles((t) => revealTile(t, clicked.index));
        }
    }

    function canClick(tile: Tile): boolean {
        return revealed.length < 2 && !tile.matched && !tile.revealed;
    }

    function processPostMove() {
        if (revealed.length === 2) {
            setTimeout(checkPair, 400);
        }
    }

    function checkPair() {
        setMoves((m) => m + 1);

        const first: number = revealed[0];
        const second: number = revealed[1];
        if (tiles[first].color === tiles[second].color) {
            setTiles((t) => matchTiles(t, revealed));
        } else {
            setTiles((t) => hideTiles(t, revealed));
        }

        setRevealed([]);
    }

    function checkWin() {
        const total: number = tiles.length;
        const matched: number = tiles.filter((tile) => tile.matched).length;

        setWin(total === matched);
    }

    return (
        <div className="game-container">
            <h1 className="game-header">
                <strong>Better Matching Game</strong>
            </h1>

            <MoveTracker moves={moves} win={win} />

            <GameBoard tiles={tiles} onTileClick={handleClick} />

            <RestartButton restart={initGame} />
        </div>
    );
}
