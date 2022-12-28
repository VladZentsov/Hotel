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
    imgName: string,
    Title: string,
    ImgNames: string[],
    BooksAndCustomersInfo: [Book, Customer][]
  ){
    super(Id, Category, Price, VisitorsNumber, Description, imgName, Title, ImgNames);
    this.BooksAndCustomersInfo = BooksAndCustomersInfo
  }
}
