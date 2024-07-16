import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear = new Date().getFullYear();
  constructor() { }

  socialMediaLinks: any = {
    instagram: 'https://www.instagram.com/mkc__111/'
  }
  ngOnInit(): void {
  }

  onSocialMediaClick(type: string) {
    window.open(this.socialMediaLinks[type])
  }

}
