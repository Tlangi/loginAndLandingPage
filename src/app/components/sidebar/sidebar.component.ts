import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/aboutUs',
    title: 'About Us',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/contactUs',
    title: 'Contact Us',
    icon: 'icon-chart-pie-36',
    class: ''
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
