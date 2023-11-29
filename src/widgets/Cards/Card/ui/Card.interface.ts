
import { column } from "entitles/redux/interfaces";

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
    col:column;
    provided:any;
}