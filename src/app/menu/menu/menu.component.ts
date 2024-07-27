import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories: any = user.categories;
  yourMenu: Array<any> = [];
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

  onCheckboxChange(event: any, item: any) {
    if (event.target.checked) {
      this.yourMenu.push(item);
    } else {
      const index = this.yourMenu.findIndex(item => item.name == item.name);
      if (index > -1) {
        this.yourMenu.splice(index, 1);
      }
    }
    this.yourMenu.sort((a: any, b: any) => a.sort - b.sort)
  }

  printMenu() {

  }

}
