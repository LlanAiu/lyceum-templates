// builtin

// external
import type { FastifyInstance } from "fastify";

// internal
import { handleGetRandomPoem } from "./handlers/random-poem-handler.js";
import type { Poem, PoemReply } from "./globals/types.js";


export function setupRoutes(server: FastifyInstance) {
    server.get<{
        Reply: PoemReply;
    }>("/random", async (_req, res) => {
        const reply = await handleGetRandomPoem();
        res.status(200).send(reply);
    })
}