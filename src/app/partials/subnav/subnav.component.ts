import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {

  // tslint:disable-next-line: no-trailing-whitespace
  
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('active');
  }

}
