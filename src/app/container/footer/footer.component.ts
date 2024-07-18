import { Component } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  user = user;

  onSocialMediaClick(type: any) {
    window.open(type.link)
  }

  openLocationInGoogleMap() {
    const win: any = window.open('https://www.google.com/maps/search/?api=1&query=' + this.user.lat + ',' + this.user.lng, '_blank');
    win.focus();
  }
}
