import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { MainRoutingModule } from './main.routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [BodyComponent,SidenavComponent,MainComponent,DashboardComponent],
  imports: [CommonModule,MainRoutingModule]
})
export class MainModule { }
