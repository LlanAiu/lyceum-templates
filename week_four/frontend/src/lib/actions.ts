// builtin

// external

// internal
import type { Poem } from "./types";


const BACKEND_URL: string = import.meta.env.VITE_BACKEND_URL;

// TODO: Finish this function here
export async function fetchRandomQuote(): Promise<Poem> {
    /* FILL IN WITH THE BACKEND ROUTE ENDPOINT 
     * (e.g. `${BACKEND_URL}/random`) 
     */
    const response = await fetch(`${BACKEND_URL}/`);


    /* I highly recommend casting the response to a type:
     * const data: PoemResponse = await response.json() as PoemResponse;
     *
     * This ensures that typing remains safe on both sides 
     * as long as the frontend and backend data types agree 
     */

    throw new Error("TODO!");
}