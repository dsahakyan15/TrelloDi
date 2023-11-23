


export interface TaskType {
    id: string;
    content: string;
}

export interface ColumnType {
    id: string;
    title: string;
    cards: TaskType[];
}

export interface CardProps{
    col:ColumnType;
    provided:any;
}