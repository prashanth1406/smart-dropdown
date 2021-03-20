
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  {
    path:'admin',
    component:AdminDashboardComponent
  },
  {
    path:'user',
    component:UserDashboardComponent
  },
  {
    path:'home',
    component:HomeComponent

  },
  {
    path:'**',
   redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

