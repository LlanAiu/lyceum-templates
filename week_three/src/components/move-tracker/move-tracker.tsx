// builtin

// external

// internal

interface MoveTrackerProps {
    moves: number;
    win: boolean;
}

export default function MoveTracker({ moves, win }: MoveTrackerProps) {
    const className = "mb-2"
    return (
        (win) ?
            (<p className={className}>You won in {moves} moves!</p>) :
            (<p className={className}>Moves: {moves}</p >)
    );
}