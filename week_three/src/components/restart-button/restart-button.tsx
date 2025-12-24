// builtin

// external

// internal

interface RestartButtonProps {
    restart: () => void;
}

export default function RestartButton({ restart }: RestartButtonProps) {
    return (
        <button
            className="mt-4 px-3 py-2 rounded-md bg-blue-100 hover:bg-blue-300"
            type="button"
            onClick={restart}
        >
            Restart
        </button>
    )
}