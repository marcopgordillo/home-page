import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  isActive: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(activeLink: string) {
    this.isActive = activeLink;
  }
}
