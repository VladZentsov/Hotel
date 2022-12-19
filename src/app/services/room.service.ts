import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/environments/environment';
import { Room } from '../shared/room';
import { filter, map, Observable, of } from 'rxjs';
import { RoomCategory } from '../shared/RoomCategory';
import { hotelImageSrc } from 'src/environments/environment';
import { RoomDetailed } from '../shared/roomDetails';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {

   }

   getAll():Observable<Room[]>{
    let url = `${this.baseUrl}${ApiPaths.Room}`;


    let rooms = this.httpClient.get<Room[]>(url).pipe(
      map((rooms: Room[]) => {
        rooms.forEach(room => {
          room = this.HandleRoom(room)
        });
        return rooms;
      })
    )
    return rooms;
   }

   getRoomDetailedById(id: string):Observable<RoomDetailed>{
    let url = `${this.baseUrl}${ApiPaths.Room}`+'/roomDetailed/'+id;

    let room = this.httpClient.get<RoomDetailed>(url)

    room = this.HandleObsRoomToRoomDetailed(room) as Observable<RoomDetailed>


    return room;
   }

   HandleObsRoomToRoomDetailed(room: Observable<RoomDetailed>):Observable<RoomDetailed>{

    let result = room.pipe(
      map((room: RoomDetailed) => {
        return this.HandleRoomToRoomDetailed(room)
      })
    )
      return result;
   }

   HandleRoomToRoomDetailed(room: RoomDetailed):RoomDetailed{
    room = this.HandleRoom(room) as RoomDetailed

    for (let index = 0; index < room.ImgNames.length; index++) {
      const imgName =  hotelImageSrc + room.ImgNames[index]+".jpg";

      room.ImgNames[index] = imgName;
    }

    return room;
   }


   HandleRoom(room: Room):Room{
    let title = RoomCategory[room.Category] + " for "+room.VisitorsNumber+" people"
    room.Title = title;

    let imgSrc = hotelImageSrc + room.imgName+".jpg"
    room.imgName = imgSrc

    return room;
   }


}
