// builtin

import type { Poem, Task, Process, PoemType } from "../../../globals/types.js";
import type { Database } from "../database.js";

// external

// internal


/* TODO: finish up this in-memory implementation of a poem database 
 * (basically, just store them in the array)
 */
export class TestDatabase implements Database {
    private poems: Poem[] = [];


    async addPoem(poem: Poem): Promise<Task> {
        throw new Error("TODO");
    }

    async getAllPoems(): Promise<Process<Poem[]>> {
        throw new Error("TODO");
    }

    async getAllByPoemType(type: PoemType): Promise<Process<Poem[]>> {
        throw new Error("TODO");
    }

    async clear(): Promise<Task> {
        this.poems = [];

        return { success: true, data: undefined };
    }
}