
export interface User {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}
export interface userInitialStateProps {
    error: string | null,
    profile: User | null,
    loading: boolean,
}
export interface author {
    name: string;
    image: string;
}
export interface reply {
    author: author;
    date: string;
    content: string;
}
export interface comment {
    author: author;
    date: string;
    content: string;
    replyes: reply[] | null;
}
export interface task {
    title: string;
    id: string;
    content: string;
    author: author;
    comments: comment[] | null;
}
export interface column {
    title: string;
    id: string;
    tasks: task[];
}

export interface board {
    title: string;
    id?: string;
    columns: column[] | null;
}
export interface boardsInitialStateProps {
    boards: board[];
    loading: boolean;
    error: any;
}


