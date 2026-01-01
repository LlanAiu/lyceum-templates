// builtin

// external
import { describe, it, expect, beforeEach } from "vitest";

// internal
import { handleRecommendPoem } from "../handle-recommend-poems.js";
import { database } from "../../modules/database/index.js";
import { PoemType } from "../../globals/types.js";


describe("poem recommendation handler tests", () => {

    // As you may expect, this runs before each test
    // Other helpful functions you may want to look at: afterAll, beforeAll, afterEach
    beforeEach(() => {
        database.clear();
    });

    it("doesn't break if database is empty", async () => {
        const input = {
            type: PoemType.Ballad,
            searchQuery: "",
        };

        const result = await handleRecommendPoem(input);

        expect(result.success).toBe(true);
    })

    // TODO: Write the rest of your tests here
});
