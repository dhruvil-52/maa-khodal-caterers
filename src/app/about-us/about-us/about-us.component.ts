import { Component, OnInit } from '@angular/core';
import { user } from '../../shared/user';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  user = user;
  constructor() { }

  ngOnInit(): void {
  }

}
