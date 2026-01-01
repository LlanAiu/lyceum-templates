// builtin

import type { Poem, Process } from "../../../globals/types.js";
import type { RelevanceRanking } from "../relevance.js";

// external

// internal


// In case you need it -- usually you don't though for testing
const FAKE_ENV = process.env.FAKE_ENV;
if (!FAKE_ENV) throw new Error("Environment variable FAKE_ENV is not set!");

export class TestRanking implements RelevanceRanking {

    // TODO: just return a shuffled list of the input poems array
    async rankByRelevance(poems: Poem[], _query: string): Promise<Process<Poem[]>> {

        throw new Error("TODO!");
    }
}

