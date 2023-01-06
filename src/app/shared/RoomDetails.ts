import { Room } from "./Room";
import { RoomCategory } from "./RoomCategory";

export class RoomDetailed extends Room{
  ImgNames: string[]
  constructor(
    Id: string,
    Category: RoomCategory,
    Price: number,
    VisitorsNumber: number,
    Description: string,
    viewImgName: string,
    imgName: string,
    Title: string,
    ImgNames: string[],
    FirstDateForSettelment: Date
  ){
    super(Id, Category, Price, VisitorsNumber, Description, viewImgName, Title, imgName, FirstDateForSettelment);
    this.ImgNames = ImgNames

  }
}
