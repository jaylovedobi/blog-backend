import { Document } from "mongoose";

export interface Postmodel extends Document{
    readonly title:string;
    readonly description:string;
    readonly body:string;
    readonly postedon:string;
}