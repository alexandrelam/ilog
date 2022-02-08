"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.Book = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const Author_1 = require("./Author");
class Book {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Author_1.Author)
], Book.prototype, "author", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, min: 0, max: 16000 }),
    __metadata("design:type", Number)
], Book.prototype, "numberOfPage", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Book.prototype, "genres", void 0);
exports.Book = Book;
exports.BookModel = (0, typegoose_1.getModelForClass)(Book);
//# sourceMappingURL=Book.js.map