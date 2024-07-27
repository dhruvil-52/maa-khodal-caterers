import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { user } from 'src/app/shared/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories: any = user.categories;
  formData: any = { yourMenu: [] };
  openModal: boolean = false;
  searchedText: any = "";
  private inputSubject = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.categories.forEach((e: any, index: any) => {
      if (index > 0) {
        e.isExpanded = false;
      } else {
        e.isExpanded = true;
      }
    })

    this.inputSubject
      .pipe(debounceTime(500))
      .subscribe(value => {
        this.categories.forEach((category: any) => {
          category.items.forEach((item: any) => {
            if (!!value && item.name.includes(value)) {
              category.isExpanded = true;
              item.searched = true;
            }
          });
        });
      });
  }

  clear() {
    this.searchedText = "";
    this.categories.forEach((category: any, index: any) => {
      category.items.forEach((item: any) => {
        if (index > 0) {
          category.isExpanded = false;
        } else {
          category.isExpanded = true;
        }
        item.searched = false;
      });
    });
  }

  onInputChange(value: any) {
    this.inputSubject.next(value);
  }

  onCheckboxChange(event: any, item: any) {
    if (event.target.checked) {
      this.formData.yourMenu.push(item);
    } else {
      const index = this.formData.yourMenu.findIndex((e: any) => {
        if (e.name === item.name) {
          return true;
        } else {
          return false;
        }
      });
      if (index > -1) {
        this.formData.yourMenu.splice(index, 1);
      }
    }
    this.formData.yourMenu.sort((a: any, b: any) => {
      if (a.sort === b.sort) {
        return a.id - b.id;
      } else {
        return a.sort - b.sort;
      }
    })
  }

  clearMenu() {
    this.formData.yourMenu = [];
    this.categories.forEach((category: any, index: any) => {
      category.items.forEach((item: any) => {
        item.isChecked = false;
      });
    });
  }

  openModalForShareMenu() {
    this.openModal = true;
  }

  closeModalForShareMenu() {
    this.openModal = false;
    this.clearForm();
  }

  sendToWhatsapp() {
    let menu = "";
    if (this.formData.yourMenu.length) {
      menu = this.formData.yourMenu.map((item: any, index: any) => `${index + 1}. ${item.name}`)
        .join('%0A');
    }
    let newMessage;
    newMessage = 'Hii I am ' + this.formData.name + '%0A %0A' +
      (this.formData.phone ? '📱 Phone Number ' + this.formData.phone + '%0A %0A' : '') +
      (this.formData.email ? '📧 Email ' + this.formData.email + '%0A %0A' : '') +
      (this.formData.message ? '💬 Message ' + this.formData.message + '%0A %0A' : '') +
      (this.formData.yourMenu.length ? '📃 Menu %0A' + menu + '%0A %0A' : '') +
      'Please Call back after getting my Enquiry';
    window.open(`https://api.whatsapp.com/send?phone=91${user.mobile}&text=${newMessage}`, '_blank');
    this.closeModalForShareMenu();
  }

  clearForm() {
    this.formData = { yourMenu: this.formData.yourMenu };
  }

}
