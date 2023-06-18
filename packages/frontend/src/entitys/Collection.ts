import {User} from "./User";

export class Collection {
  id: number|undefined;
  user: User;
  name: string;
  description: string;
  accessKey: number;


  constructor(id: number|undefined, user: User, name: string, description: string, accessKey: number) {
    this.id = id;
    this.user = user;
    this.name = name;
    this.description = description;
    this.accessKey = accessKey;
  }
}
