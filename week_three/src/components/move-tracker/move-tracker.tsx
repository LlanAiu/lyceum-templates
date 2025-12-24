// builtin

// external

// internal

interface MoveTrackerProps {
    moves: number;
    win: boolean;
}

export default function MoveTracker({ moves, win }: MoveTrackerProps) {
    return (
        (win) ?
            (<p className="move-tracker">You won in {moves} moves!</p>) :
            (<p className="move-tracker">Moves: {moves}</p >)
    );
}