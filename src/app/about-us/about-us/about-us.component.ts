import { Component } from '@angular/core';
import { user } from '../../shared/user';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  user = user;
}
