import { Author } from './Author';
import { Genre } from './Genre';
export declare class Book {
    name: string;
    author: Author;
    numberOfPage: number;
    genres?: Genre[];
}
export declare const BookModel: any;
