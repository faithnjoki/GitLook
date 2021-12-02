import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public brands: string = 'Assassin';
  constructor() { }

  ngOnInit(): void {
  }

}
