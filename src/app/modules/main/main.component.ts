import { Component, OnInit } from '@angular/core';
import { SideNavToggle } from './types/SideNavToggle';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  isSideNavCollapsed = false;
  screenWidth = 0;

  constructor() { }

  onToggleSideNav(data:SideNavToggle): void{
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }

}
