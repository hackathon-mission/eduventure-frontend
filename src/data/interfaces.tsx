import { ObjectId } from "mongodb";

export interface Adventure {
    _id: ObjectId;
    chapters: ObjectId[];
    description: string;
    name: string;
}
export interface UserAdventure {
    _id?: ObjectId;
    base_adventure_id: ObjectId;
    completed: boolean[];
}
export interface Teacher {
  _id?: string;
  username: string;
  realname: string;
  pronouns: string;
  avatar: string | null;
  adventures: string[];
}

export interface User {
  _id?: string;
  username: string;
  pronouns: string;
  xp: number;
  avatar: string | null;
  presented_items: string[];
  user_adventures: string[];
}
