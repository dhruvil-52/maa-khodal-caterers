import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpned: boolean = false;

  constructor(private eRef: ElementRef) { }

  toggleMenu(event: Event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    this.isMenuOpned = !this.isMenuOpned;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpned = false;
    }
  }
}
