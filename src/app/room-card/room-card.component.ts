import { Component, OnInit, Input  } from '@angular/core';
import { Room } from '../shared/Room';
import { RoomCategory } from '../shared/RoomCategory';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent implements OnInit {
  _room: Room;
  roomCategoryTitle: string

  @Input()
  set room(room: Room) {
    this._room = room
    this.roomCategoryTitle = RoomCategory[this.room?.Category]
  }
  get room() { return this._room; }

  constructor() { }

  ngOnInit(): void {


  }
}
