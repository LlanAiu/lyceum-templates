# Full Stack Poetry Demo

Ok, so this week, we'll be setting up the basic web application data flow to return a random poem to the user.

The API we'll be using is here: https://github.com/thundercomb/poetrydb#readme

And yes, you could build this as just a frontend (since the backend doesn't do anything but reformat the data), but that's not the point of the activity.

## The Monorepo

You'll notice that the file tree in this week looks a little different from last week. We call this setup the monorepo. It basically holds both the frontend and backend in one place.

```
week_four/
|- backend/
    |- ... (all backend files here)
|- frontend/
    |- ... (all frontend files here)
|- ...
```
This is how you'll set up your agenda app assignment when you convert it to a full stack application (hopefully it already looks like this, but no worries it's fairly easy to move it into this structure if not).

To run either application, the process is the same:
1. ```cd frontend``` or ```cd backend```
2. ```pnpm i``` or ```npm install```
3. ```pnpm dev``` or ```npm run dev```

To test, you'll have to run both simultaneously; I find it's easiest to use the split terminal feature in VS Code.

## Architecture and Design

### Frontend

This is just your basic React application like we've seen before, except this time with (a miniscule amount of) routing via React Router.

The page you care about ```RandomPoemPage```, just hits the backend (GET request) for poem data and then displays it.

There isn't much here you haven't seen before, but note that in ```components/random-poem.tsx```, you see a line that looks like this:
```
useEffect(() => {
    fetchRandomPoem().then(setPoem);
}, [])
```

All this is saying is that, once the frontend has the data from the backend, I want you to set the poem state variable to the returned data. This syntax is necessary because the ```useEffect``` callback cannot be asynchronous.

### Backend

You likely haven't seen a project like this yet, so let's do a file tree tour:

```
backend/
|- dist/ (for compiled version of your code, generated if/when you run the build command)
|- src/
    |- globals/ (for backend-wide utilities, e.g. shared types)
        |- ...
    |- handlers/ (for route handlers)
        |- ...
    |- bootstrap.ts (for environment setup)
    |- routes.ts (for routes setup)
    |- server.ts (the main file)
|- .env.development (environment file)
|- .gitignore (because you don't want to check in either your .env's or dist/)    
|- package.json (this is still a Node project, so still need one of these)
|- ...

```

The actual design of the backend is super simple, there's literally one route (the random route), which will hit the poetry API (GET request) provided at the very top, and then format the data in a way that the frontend expects.

## What You Need To Do

### Frontend
* Create a ```.env.development``` and fill in the right variables
* Finish the backend data fetch function in ```lib/actions.ts```
* Complete the ```RandomPoemPage``` component so that it actually displays the poem (no need for fancy styling if you don't want to)
* Add a route to your application that displays the ```RandomPoemPage```

### Backend
* Create a ```.env.development``` and fill in the right variables
* Finish up the route handler in ```handlers/random-poem-handler.ts```
* Finish setting up the route in ```routes.ts```

You may find that you need other utilities or types: feel free to add them, but just put them in the right place (don't just stick the in random places!).

Ok, that's all from me -- enjoy!