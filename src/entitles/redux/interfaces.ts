
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
    replyes:reply[] | null;
}
export interface task {
    title: string;
    id: string;
    data: string;
    author:author;
    comments:comment[] | null;
}
export interface column {
    title: string;
    id: string;
    tasks: task[] | null;
}

export interface board {
    title: string;
    id: string;
    columns: column[] | null;
}
export interface boardsInitialStateProps {
    boards: board[];
    loading:boolean;
    error:any;
}

// boards page[
//     board{
//         title:string,
//         id:string,
//         columns:arr[
//             column :obj{
//             title:string,
//             tasks: [
//                 task: obj{
//                     title: string,
//                     data: timeStamp,
//                     author{
//                     name: string,
//                     photoURL: string,
//                 },
//                 comments[
//                 author{
//                     name: string,
//                     photoURL: string,
//                 },
//                 date: timeStamp,
//                 content: string,
//                 replyes: [
//                     author{
//                         name: string,
//                         photoURL: string,
//                     },
//                     date: timeStamp,
//                     content: string,
//                 ]
//             ]
//         }
//             ]
//             },
// { }
// ]
//     },
// {

// }
// ]

