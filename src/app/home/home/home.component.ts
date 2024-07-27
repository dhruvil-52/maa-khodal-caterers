import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user = user;
  counter = 0;
  currentYear = new Date().getFullYear();
  establishedYear = 1998;
  totalExperience = 0;
  name: any = ""
  constructor() { }

  ngOnInit(): void {
    this.totalExperience = (this.currentYear - this.establishedYear)
    let interval = setInterval(() => {
      this.counter += 1;
      if (this.counter == this.totalExperience) {
        clearInterval(interval);
      }
    }, 100);

    // let nameCounter = 0;
    // let nameInterval = setInterval(() => {
    //   this.name += this.user.fullName.substring(this.name.length, this.counter);
    //   if (nameCounter == this.user.fullName.length) {
    //     clearInterval(nameInterval);
    //   }
    //   nameCounter += 1;
    // }, 100);
  }

}
