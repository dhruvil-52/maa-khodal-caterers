import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from 'src/app/shared/user';
declare var google: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  user = user;
  map: any;
  @ViewChild('map', { static: false }) mapElement: any;
  constructor() { }

  ngAfterViewInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.user.lat, this.user.lng),
      zoom: 15
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    new google.maps.Marker({
      position: new google.maps.LatLng(this.user.lat, this.user.lng),
      icon: {
        url: "assets/logos/logo-dark-1.png",
        scaledSize: new google.maps.Size(60, 40),
      },
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: false
    });
  }

  ngOnInit(): void {
  }

  sendDataToWhatsapp() {
    var name = "name";
    var phone = "phone";
    var email = "email";
    var service = "service";
    var url: any = "https://wa.me/918789529215?text=";
    + "Name: " + name + "%0a"
      + "Phone: " + phone + "%0a"
      + "Email: " + email + "%0a"
      + "Service: " + service;
    window.open(url, '_blank');
  }

  openLocationInGoogleMap() {
    const win: any = window.open('https://www.google.com/maps/search/?api=1&query=' + this.user.lat + ',' + this.user.lng, '_blank');
    win.focus();
  }
}
