import { RoomCategory } from "./RoomCategory";

export class RoomsSettlement{

  constructor(
    RoomId: string,
    Category: RoomCategory,
    Date: Date,
    IsSettlement: boolean,
    IsPaymentComplete: boolean,
    BookId: string,

  ){
    this.RoomId = RoomId;
    this.Category = Category;
    this. Date = Date;
    this.IsPaymentComplete = IsPaymentComplete;
    this.IsSettlement = IsSettlement;
    this.BookId = BookId
  }

  RoomId: string;
  Category: RoomCategory;
  Date: Date;
  IsSettlement: boolean;
  IsPaymentComplete: boolean;
  BookId: string;
}
