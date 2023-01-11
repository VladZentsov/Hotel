import { Component, OnInit } from '@angular/core';
import { RoomCategory } from '../shared/RoomCategory';
import { Room } from '../shared/Room';
import { RoomService } from '../services/room.service';
import { environment } from 'src/environments/environment';
import { hotelImageSrc } from 'src/environments/environment';
import { visibility, flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      visibility(),
      flyInOut(),
      expand()
    ]

})
export class HomePageComponent implements OnInit {

  rooms?: Room[];
  hotelImageSrc?: string;
  errMess: string;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.hotelImageSrc = hotelImageSrc
    this.roomService.getAll().subscribe((rooms)=>{
      this.rooms = rooms
    }, (err)=>{
      this.errMess = err.message
      console.log("dfsdfsd"+err)
    }
    )

  }

  // private handleError(error: any) {
  //   let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   return Observable.throw(error);
  // }

}
