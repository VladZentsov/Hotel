import { Route, Routes } from "@angular/router";
import { RoomDetailComponent } from "../room-detail/room-detail.component";



export const routes: Routes = [
  {path:'roomdetail', component: RoomDetailComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
]
