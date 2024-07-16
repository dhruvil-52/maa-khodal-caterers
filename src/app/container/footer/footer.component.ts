import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  user = user;

  constructor() { }

  ngOnInit(): void {
  }

  onSocialMediaClick(type: any) {
    window.open(type.link)
  }

}
