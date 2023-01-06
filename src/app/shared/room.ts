import { RoomCategory } from "./RoomCategory";

export class Room{

  constructor(
    Id: string,
    Category: RoomCategory,
    Price: number,
    VisitorsNumber: number,
    Description: string,
    viewImgName: string,
    Title: string,
    imgName: string,
    FirstDateForSettelment: Date
  ){
    this.Id = Id;
    this.Category = Category;
    this.Price = Price;
    this.VisitorsNumber = VisitorsNumber;
    this.Description = Description;
    this.viewImgName = viewImgName;
    this.Title = Title;
    this.imgName = imgName;
    this.FirstDateForSettelment = FirstDateForSettelment
  }

  Id: string;
  Category: RoomCategory;
  Price: number;
  VisitorsNumber: number;
  Description: string;
  viewImgName: string;
  imgName: string;
  Title: string;
  FirstDateForSettelment: Date;
}
