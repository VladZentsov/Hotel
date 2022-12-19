export class Book{

  constructor(
    Id: string,
    StartDate:Date,
    EndDate:Date,
    Price: Number,
    IsPaymentComplete: boolean,
    CustomerId: string,
    RoomId: string


  ){
    this.Id = Id;
    this.StartDate = StartDate;
    this.EndDate = EndDate;
    this.Price = Price,
    this.IsPaymentComplete = IsPaymentComplete,
    this.CustomerId = CustomerId,
    this.RoomId = RoomId

  }

  Id: string;
  StartDate:Date;
  EndDate:Date;
  Price: Number;
  IsPaymentComplete: boolean;
  CustomerId: string;
  RoomId: string;
}
