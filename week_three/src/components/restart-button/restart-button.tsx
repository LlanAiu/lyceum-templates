// builtin

// external

// internal
import "./restart-button.css";


interface RestartButtonProps {
    restart: () => void;
}

export default function RestartButton({ restart }: RestartButtonProps) {
    return (
        <button
            className="restart"
            type="button"
            onClick={restart}
        >
            Restart
        </button>
    )
}