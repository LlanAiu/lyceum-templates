// builtin

import type { Poem, PoemReply, PoemResponse } from "../globals/types.js";

// external

// internal


const DATA_API_URL: string | undefined = process.env.DATA_API_URL;

if (!DATA_API_URL) throw new Error("Environment variable DATA_API_URL is not set!");

export async function handleGetRandomPoem(): Promise<PoemReply> {
    const response = await fetch(`${DATA_API_URL}/random`);

    const poemData: PoemResponse[] = await response.json() as PoemResponse[];

    const poem = poemData[0];

    if (!poem) {
        return {
            poem: {
                title: "Not found... :(",
                author: "",
                text: "",
            }
        };
    }

    return {
        poem: {
            title: poem.title,
            author: poem.author,
            text: poem.lines.join("\n"),
        }
    }

    // throw new Error("TODO!");
}