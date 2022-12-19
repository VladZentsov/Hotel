import { Room } from "./room";
import { RoomCategory } from "./RoomCategory";

export class RoomDetailed extends Room{
  ImgNames: string[]
  constructor(
    Id: string,
    Category: RoomCategory,
    Price: number,
    VisitorsNumber: number,
    Description: string,
    imgName: string,
    Title: string,
    ImgNames: string[]
  ){
    super(Id, Category, Price, VisitorsNumber, Description, imgName, Title);
    this.ImgNames = ImgNames
  }
}
