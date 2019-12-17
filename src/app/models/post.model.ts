import { User } from './user.model';

export class Post{
    constructor(
        public _id: string,
        public title: string,
        public body: string,
        public created : Date,
        public likes: string[],
    ){

    }
}