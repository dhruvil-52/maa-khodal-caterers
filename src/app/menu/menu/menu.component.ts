import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories: any = user.categories;
  yourMenu = [];
  constructor() { }

  ngOnInit(): void {
    this.categories.forEach((e: any, index: any) => {
      if (index > 0) {
        e.isExpanded = false;
      } else {
        e.isExpanded = true;
      }
    })
  }

  expandPannel() {

  }

}
