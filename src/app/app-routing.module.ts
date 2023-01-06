import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminRoomDetailComponent } from './admin-room-detail/admin-room-detail.component';
import { AdminRoomEditComponent } from './admin-room-edit/admin-room-edit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  {path:'roomdetail/:id', component: RoomDetailComponent},
  {path:'home', component: HomePageComponent},
  {path:'admin-menu', component: AdminMenuComponent},
  {path:'admin-room-detail/:id', component: AdminRoomDetailComponent},
  {path:'edit-room/:id', component: AdminRoomEditComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
