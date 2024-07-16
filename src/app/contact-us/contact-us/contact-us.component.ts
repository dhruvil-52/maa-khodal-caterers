import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  user = user;
  constructor() { }

  ngOnInit(): void {
  }

}
