# Poem Recommendation Testing

Another backend week!

A couple additions to notice here from what you've seen before. Notably:

```
backend/
|- src/
    |- globals/
    |- handlers/
        |- __tests__/
            |- recommend-poems.test.ts
        |- handle-recommend-poems.ts
    |- modules/
        |- database/
            |- implementations/
                |- test.ts (test implementation -- you'll write this)
            |- database.ts (module interface)
            |- index.ts
        |- relevancy/ (very similar structure to database module)
            |- ...
    |- ...
|- vitest.config.ts (vitest configuration -- we actually care about this)
```

I like having the implementations folder just to isolate out the important two files in the module (the interface, and the export file).

Also, we have a tests folder holding test files (well, really just one). We've named it ```__tests__``` just by convention, and will be looking for it in the ```include``` field of Vitest configuration.

On that note, I would like you to take a look at ```vitest.config.ts```:

```
// external
import { config } from "dotenv"
import { defineConfig } from 'vitest/config'

// internal


export default defineConfig({
    test: {
        include: ['**/__tests__/**/*.?(c|m)[jt]s?(x)'], (which files to include)
        env: {
            ...config({ path: "./.env.test" }).parsed (which .env file to use)
        }
    },
})
```

The ```include```field is a string array filled with a regular expression (regex), it matches all ```.ts``` files under a ```__tests__``` directory. This is a custom value I've put in here, the default match pattern is actually ```<FILE NAME>.test.ts```.

You don't need to worry about how this regex (more accurately, this is an extended glob pattern, since it's used for file directories, but it borrows a lot from regex syntax) works, but just quickly:

* "**" matches any directory (glob only! No meaning in regex)
* "*" matches any file name (this is the glob interpretation, * means "zero or more of previous character" in pure regex)
* "?(c | m)" optionally matches a "c" or an "m" (i.e. so that it can catch .mjs files)
* "[jt]" matches either a "j" or a "t"
* "?(x)" optionally matches an "x" (i.e. so that it can catch .tsx files)
* and the rest has to be an exact match (i.e. it has to have a ```__tests__``` directory in the path and an "s" after the "j" or "t")

Ok great! Also notice that we have to pass in the environment file manually. This is because we never will actually boot up the server, so ```bootstrap.js``` is never imported and called. You'll notice that ```modules/relevancy/implementations/test.ts``` actually imports a placeholder environment variable just you can confirm (Oh, and yes, you need to make an ```.env.test``` with that variable in it for this to run correctly).

## The Actual Premise

What I've scaffolded for y'all here is a very simple backend that will give you a list of poem recommendations given a search object (defined in the route handler). Yes, I've set this up as a POST route even though it should be a GET route, it's just a hassle to pass in that many parameters via the URL query.

Even though it's written for you, I would also recommend taking a look at the new error handling in ```routes.ts``` (and in the route handler), with the helper types defined in ```globals/types.ts``` as you would expect. This is the same as in the lecture, but you may find it helpful to see it again.

The route handler is done (feel free to take a look), but it depends on the ```database``` and ```relevancy``` modules, both of which have incomplete test implementations.

I've also provided some setup for the ```recommend-poems.test.ts```, along with an actual test to give y'all an idea of what you have to work with. The rest of the tests of this handler is up to you.

## Tests Writing

Some considerations here:
* Have you tested all features of the handler?
    * Do you need to test them in isolation? All subsets? (i.e. ablation)
* What database setup and inputs do you need to properly test each feature?
* What outputs would you expect if it works as you want it to? 
    * You'll want to write the confirmation based on what you want to happen, not by following the route handler logic FOR THE MOST PART (you obviously have to consider the test implementations that won't work correctly / some modules aren't deterministic)

You may wonder, why would we want to write a test implementation that doesn't even work? We'll primarily, we want to test whether the data flow goes through correctly, so if a feature is hard to mock in a test implementation (like relevance sorting is), we'll just the write the simplest alternative that gives us a comparably similar data output (in our case, random shuffling the data).

## What You Need To Do

To summarize:
* Complete the test implementation of the ```database``` module
* Complete the test implementation of the ```relevancy``` module
* Write the tests you think are needed for this route handler
* Actually run the tests and make sure they all pass
    * Fix and bugs that you find


That's way more than enough yap than me -- go have fun!!