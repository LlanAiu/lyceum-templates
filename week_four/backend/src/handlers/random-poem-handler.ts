// builtin

// external

// internal


const DATA_API_URL: string | undefined = process.env.DATA_API_URL;

if (!DATA_API_URL) throw new Error("Environment variable DATA_API_URL is not set!");

/* TODO: Finish this handler
 * Also, change the return type to something like Promise<PoemResponse>
 */
export async function handleGetRandomPoem(): Promise<unknown> {
    const response = await fetch(`${DATA_API_URL}/random`);

    const data = await response.json(); // Highly recommend type casting this result!

    console.log(data);

    throw new Error("TODO!");
}