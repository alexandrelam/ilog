import { Book } from './Book';
export declare class Author {
    name: string;
    books?: Book[];
}
export declare const AuthorModel: import("@typegoose/typegoose").ReturnModelType<typeof Author, import("@typegoose/typegoose/lib/types").BeAnObject>;
