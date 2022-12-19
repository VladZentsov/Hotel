import { Component, OnInit } from '@angular/core';
import { RoomCategory } from '../shared/RoomCategory';
import { Room } from '../shared/room';
import { RoomService } from '../services/room.service';
import { environment } from 'src/environments/environment';
import { hotelImageSrc } from 'src/environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  rooms?: Room[];
  hotelImageSrc?: string;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.hotelImageSrc = hotelImageSrc
    this.roomService.getAll().subscribe((rooms)=>{
      console.log(rooms)
      this.rooms = rooms
    })



  }

}
