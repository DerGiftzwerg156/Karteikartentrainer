import {User} from "./User";

export class Collection {
  id: number;
  user: User;
  name: string;
  description: string;
  accessKey: string;


  constructor(id: number, user: User, name: string, description: string, accessKey: string) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.description = description;
    this.accessKey = accessKey;
  }
}
