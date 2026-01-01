// builtin

// external

// internal
import type { Poem, PoemType, Process } from "../globals/types.js";
import { database } from "../modules/database/index.js";
import { relevance } from "../modules/relevancy/index.js";


export interface PoemRecommendationInput {
    type: PoemType;
    searchQuery: string;
    minLines?: number;
    maxLines?: number;
    maxPoems?: number;
}

export async function handleRecommendPoem(input: PoemRecommendationInput): Promise<Process<Poem[]>> {
    const poemsResult = await database.getAllByPoemType(input.type);
    if (!poemsResult.success) {
        return poemsResult;
    }
    let poems = poemsResult.data;

    poems = poems.filter(poem => input.minLines !== undefined ? poem.lines.length <= input.minLines : true);
    poems = poems.filter(poem => input.maxLines !== undefined ? poem.lines.length >= input.maxLines : true);

    const rankedResult = await relevance.rankByRelevance(poems, input.searchQuery);
    if (!rankedResult.success) {
        return rankedResult;
    }

    let rankedPoems = rankedResult.data;

    if (input.maxPoems !== undefined) {
        rankedPoems = rankedPoems.slice(0, input.maxPoems + 1);
    }

    return { success: true, data: rankedPoems };
}