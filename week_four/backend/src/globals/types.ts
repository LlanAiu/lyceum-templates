// builtin

// external

// internal


export interface PoemReply {
    poem: Poem;
}

export interface Poem {
    title: string;
    text: string;
    author: string;
}

export interface PoemResponse {
    title: string;
    author: string;
    lines: string[];
}