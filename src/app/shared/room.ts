import { RoomCategory } from "./RoomCategory";

export class Room{

  constructor(
    Id: string,
    Category: RoomCategory,
    Price: number,
    VisitorsNumber: number,
    Description: string,
    imgName: string,
    Title: string
  ){
    this.Id = Id;
    this.Category = Category;
    this.Price = Price;
    this.VisitorsNumber = VisitorsNumber;
    this.Description = Description;
    this.imgName = imgName;
    this.Title = Title;
  }

  Id: string;
  Category: RoomCategory;
  Price: number;
  VisitorsNumber: number;
  Description: string;
  imgName: string;
  Title: string;
}
