import { ObjectId } from "mongodb";
export interface Item {
    _id: ObjectId;
    name: string;
    img: string;
    type: string;
}

export interface Adventure {
    _id: ObjectId;
    chapters: ObjectId[];
    description: string;
    name: string;
}
export interface UserAdventure {
    _id: ObjectId;
    base_adventure_id: ObjectId;
    completed: boolean[];
}
export interface Teacher {
    _id: string;
    username: string;
    realname: string;
    pronouns: string;
    avatar: Item | null;
    adventures: string[];
}
export interface User {
    _id: ObjectId;
    username: string;
    pronouns: string;
    xp: number;
    avatar: Item | null;
    items: ObjectId[];
    presented_items: Item[];
    user_adventures: UserAdventure[];
}

export interface Listing {
  _id: ObjectId;
  name: string;
  description: string;
  item: ObjectId;
  seller: ObjectId;
  price: number;
}


export interface Link {
  _id: ObjectId;
  url: string;
  name: string;
}

