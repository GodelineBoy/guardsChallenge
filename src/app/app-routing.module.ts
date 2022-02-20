import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from 'src/shared/services/guards/is-admin.guard';
import { IsConnectedGuard } from 'src/shared/services/guards/is-connected.guard';
import { AdminComponent } from './admin/admin.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch:'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dasboard',
    component: DasboardComponent,
    canActivate: [IsConnectedGuard, IsAdminGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [IsAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
