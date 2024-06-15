import { ObjectId } from "mongodb";

export interface Adventure {
    _id?: ObjectId;
    chapters: ObjectId[];
    description: string;
    name: string;
}
export interface UserAdventure {
    _id?: ObjectId;
    base_adventure_id: ObjectId;
    completed: boolean[];
}
