import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  
})
export class ContactComponent {
  emailTexts = ["ludwingarmijosaavedra@hotmail.com", "ludwingarmijosaavedra@gmail.com"];
  currentEmailText = this.emailTexts[0];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeEmailText();
    }, 2000);
  }

  changeEmailText() {
    const currentIndex = (this.emailTexts.indexOf(this.currentEmailText) + 1) % this.emailTexts.length;
    this.currentEmailText = this.emailTexts[currentIndex];
  }
}
