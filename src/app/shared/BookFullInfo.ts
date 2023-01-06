import { Book } from "./Book";
import { RoomCategory } from "./RoomCategory";

export class BookFullInfo extends Book{
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
    Category: RoomCategory,
    VisitorsNumber: number,
    Description: string,
    viewImgName: string,
    imgName: string,
    telNumber: string,

  ){
    super(Id, StartDate, EndDate, Price, IsPaymentComplete, CustomerId, RoomId)
    this.Category = Category;
    this.Price = Price;
    this.VisitorsNumber = VisitorsNumber;
    this.Description = Description;
    this.viewImgName = viewImgName;
    this.Name = Name;
    this.Surname = Surname,
    this.Email = Email,
    this.telNumber = telNumber
    this.imgName = imgName
  }
  Name: string;
  Surname: string;
  Email: string;
  Category: RoomCategory;
  VisitorsNumber: number;
  Description: string;
  viewImgName: string;
  telNumber: string;
  imgName: string;

}
