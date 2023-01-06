import { Book } from "./Book";
import { Customer } from "./Customer";

import { RoomCategory } from "./RoomCategory";
import { RoomDetailed } from "./RoomDetails";

export class RoomFullnfo extends RoomDetailed{
  BooksAndCustomersInfo: [Book, Customer][]
  constructor(
    Id: string,
    Category: RoomCategory,
    Price: number,
    VisitorsNumber: number,
    Description: string,
    viewImgName: string,
    Title: string,
    ImgNames: string[],
    imgName: string,
    BooksAndCustomersInfo: [Book, Customer][],
    FirstDateForSettelment: Date
  ){
    super(Id, Category, Price, VisitorsNumber, Description, viewImgName, Title, imgName, ImgNames, FirstDateForSettelment);
    this.BooksAndCustomersInfo = BooksAndCustomersInfo
  }
}
