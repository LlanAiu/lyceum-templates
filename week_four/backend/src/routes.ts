// builtin

// external
import type { FastifyInstance } from "fastify";

// internal


export function setupRoutes(server: FastifyInstance) {
    server.get<{
        /*TODO: mark the typing on this route as
         * Reply: <TYPE>;
         */
    }>("" /* NAME THE ROUTE */, async (_req, res) => {
        // TODO: call the route handler and return the data

    })
}