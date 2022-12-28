import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { RoomService } from '../services/room.service';
import { FreeBookDates } from '../shared/freeBookDates';
import { Room } from '../shared/room';
import { RoomFullnfo } from '../shared/RoomFullInfo';
import { RoomsSettlement } from '../shared/RoomsSettlement';
import { AfterViewChecked, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  room: Room
  private _currentRoomId: string
  freeBookDates: FreeBookDates
  rooms:Room[]
 calendarTrigger: number = 0;

  get currentRoomId(): string {
    return this._currentRoomId;
  }

  set currentRoomId(value: string) {
    console.log(value)
    this._currentRoomId = value;
    this.UpdateFreeDates(value)
}


  twoDimentionalRoomsSettlement: RoomsSettlement[][]

  constructor(private roomService: RoomService, private bookService: BookService, protected renderer:Renderer2) {

  }

  ngOnInit(): void {
    this.roomService.getRoomsSettlement().subscribe((roomsSettlement)=>{
      console.log(roomsSettlement)
      this.twoDimentionalRoomsSettlement = roomsSettlement
    })

    this.roomService.getAll().subscribe((rooms)=>this.rooms = rooms)
  }

  UpdateFreeDates = (id: string) => {
    this.bookService.getFreeBookDates(id).subscribe((freeBookDates)=>{
      this.freeBookDates=freeBookDates
      console.log(freeBookDates)
      this.calendarTrigger++
    })
    this.roomService.getRoomById(id).subscribe((room)=>this.room = room)

  }

  myFilter = (d: Date | null): boolean => {
    if(this.freeBookDates==undefined){
      let now = new Date(new Date().valueOf()-24*60*60*1000)
      if(d>=now)
        return true
      else
        return false
    }
    let result = false
    this.freeBookDates.Days.forEach(element => {
      let first = new Date(element[0].valueOf()-24*60*60*1000)
      if (d>=(first) && d<=element[1]){
        result = true
      }
    });

    return result
  };

}
