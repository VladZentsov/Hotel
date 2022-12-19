import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  {path:'roomdetail/:id', component: RoomDetailComponent},
  {path:'home', component: HomePageComponent},
  {path: '', redirectTo: "/home", pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
