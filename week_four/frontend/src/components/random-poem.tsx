// builtin

// external
import { useEffect, useState } from "react"

// internal
import { fetchRandomQuote as fetchRandomPoem } from "../lib/actions";
import type { Poem } from "../lib/types";


export default function RandomPoemPage() {
    const [poem, setPoem] = useState<Poem | undefined>(undefined)

    useEffect(() => {
        fetchRandomPoem().then(setPoem);
    }, [])


    if (!poem) {
        return <div>Loading</div>
    }

    // TODO: finish this component
    return (
        <div>
            <p>{poem.title}</p>
            <p>{poem.text}</p>
            <p>{poem.author}</p>
        </div>
    )
}