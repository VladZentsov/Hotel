import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiPaths } from 'src/environments/environment';
import { Room } from '../shared/Room';
import { filter, map, Observable, of } from 'rxjs';
import { RoomCategory } from '../shared/RoomCategory';
import { hotelImageSrc } from 'src/environments/environment';

import { RoomFullnfo } from '../shared/RoomFullInfo';
import { RoomDetailed } from '../shared/RoomDetails';
import { RoomsSettlement } from '../shared/RoomsSettlement';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

   getRoomById(id: string):Observable<Room>{
    let url = `${this.baseUrl}${ApiPaths.Room}`+'/'+id;

    let room = this.httpClient.get<RoomDetailed>(url)

    room = this.HandleObsRoomToRoomDetailed(room) as Observable<RoomDetailed>

    return room;
   }

   getRoomDetailedById(id: string):Observable<RoomDetailed>{
    let url = `${this.baseUrl}${ApiPaths.Room}`+'/roomDetailed/'+id;

    let room = this.httpClient.get<RoomDetailed>(url)

    room = this.HandleObsRoomToRoomDetailed(room) as Observable<RoomDetailed>

    return room;
   }

   getRoomFullInfos():Observable<RoomFullnfo[]>{
    let url = `${this.baseUrl}${ApiPaths.Room}`+'/roomFullInfos';

    let rooms = this.httpClient.get<RoomFullnfo[]>(url).pipe(
      map((rooms: RoomFullnfo[]) => {
        rooms.forEach(room => {
          room = this.HandleRoomToRoomDetailed(room) as RoomFullnfo
        });
        return rooms;
      })
    )

    return rooms;
   }

   getRoomFullInfoById(id: string):Observable<RoomFullnfo>{
    let url = `${this.baseUrl}${ApiPaths.Room}`+'/roomFullInfo/'+id;

    let rooms = this.httpClient.get<RoomFullnfo>(url).pipe(
      map((room: RoomFullnfo) => {
          room = this.HandleRoomToRoomDetailed(room) as RoomFullnfo
        return room;
      })
    )

    return rooms;
   }

   getRoomsSettlement():Observable<RoomsSettlement[][]>{
    let url = `${this.baseUrl}${ApiPaths.Room}`+'/roomsSettlement';

    let roomsSettlement = this.httpClient.get<RoomsSettlement[][]>(url)

    return roomsSettlement;
   }

   updateRoom(room: RoomDetailed){

    let url = `${this.baseUrl}${ApiPaths.Room}`+'/update';

    console.log()

    let body = JSON.stringify(room);
    console.log("sfd")
    console.log(body)

    this.httpClient.post(url, body, this.httpOptions)
    .subscribe(response=> console.log(response))
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

    if(room.ImgNames!=null){
      for (let index = 0; index < room.ImgNames.length; index++) {
        const viewImgName =  hotelImageSrc + room.ImgNames[index]+".jpg";

        room.ImgNames[index] = viewImgName;
      }
    }

    return room;
   }


   HandleRoom(room: Room):Room{
    let title = RoomCategory[room.Category] + " for "+room.VisitorsNumber+" people"
    room.Title = title;

    let imgSrc = hotelImageSrc + room.imgName+".jpg"
    room.viewImgName = imgSrc

    return room;
   }

  //  private compareRoomFullInfos(a:RoomFullnfo, b:RoomFullnfo){
  //   if ( a.BooksAndCustomersInfo[0][0]. < b.last_nom ){
  //     return -1;
  //   }
  //   if ( a.last_nom > b.last_nom ){
  //     return 1;
  //   }
  //   return 0;
  //  }
}
