import { Book } from "./Book";
import { RoomCategory } from "./RoomCategory";

export class BookCreateModel extends Book{
  constructor(
    Id: string,
    StartDate:Date,
    EndDate:Date,
    Price: Number,
    IsPaymentComplete: boolean,
    CustomerId: string,
    RoomId: string,
    Name: string,
    Surname: string,
    Email: string,
    telNumber: string,

  ){
    super(Id, StartDate, EndDate, Price, IsPaymentComplete, CustomerId, RoomId)
    this.Price = Price;
    this.Name = Name;
    this.Surname = Surname,
    this.Email = Email,
    this.telNumber = telNumber
  }
  Name: string;
  Surname: string;
  Email: string;
  Category: RoomCategory;
  VisitorsNumber: number;
  Description: string;
  imgName: string;
  telNumber: string;

}
