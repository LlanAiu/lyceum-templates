// builtin

// external

// internal
import type { Poem, PoemResponse } from "./types";


const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

// TODO: Finish this function here
export async function fetchRandomQuote(): Promise<Poem> {
    const response = await fetch(`${BACKEND_URL}/random`);

    /* I highly recommend casting the response to a type:
     * const data: QuoteResponse = await response.json() as QuoteResponse;
     *
     * This ensures that typing remains safe on both sides 
     * as long as the frontend and backend data types agree 
     */


    const data: PoemResponse = await response.json() as PoemResponse;

    return data.poem;
    // throw new Error("TODO!");
}