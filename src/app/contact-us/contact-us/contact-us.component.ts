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
  formData: any = {};
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
    var url: any = "https://api.whatsapp.com/send?text=";
    + "Name: " + this.formData.name + "%0a"
      + "Phone: " + this.formData.phone + "%0a"
      + "Email: " + this.formData.email + "%0a"
      + "Message: " + this.formData.message;
    window.open(url, '_blank');
  }
  sendToFacebook() {
    // window.open("https://www.facebook.com/sharer/sharer.php?u=" + this.Url + '&description=' + data which you want to share, '_blank')
  }
  sendToWhatsapp() {
    let newMessage;
    newMessage = 'Hii You got an Enquiry from ' + this.formData.name  + '%0A %0A' +
      (this.formData.phone ? '📱 Phone Number ' + this.formData.phone + '%0A %0A' : '') +
      (this.formData.email ? '📧 Email ' + this.formData.email + '%0A %0A' : '') +
      (this.formData.message ? '💬 Message ' + this.formData.message + '%0A %0A' : '');
    window.open(`https://api.whatsapp.com/send?phone=91${user.mobile}&text=${newMessage}`, '_blank')
  }
  sendToTwitter() {
    // window.open("https://twitter.com/intent/tweet?text=" + data which you want to share,, '_blank')
  }

  clearForm() {
    this.formData = {};
  }

  openLocationInGoogleMap() {
    const win: any = window.open('https://www.google.com/maps/search/?api=1&query=' + this.user.lat + ',' + this.user.lng, '_blank');
    win.focus();
  }
}
