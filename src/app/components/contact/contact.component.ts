import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name =new FormControl ('', Validators.required);
  email =new FormControl ('', [Validators.email,Validators.required]);
  emailTexts = ["ludwingarmijosaavedra@hotmail.com", "ludwingarmijosaavedra@gmail.com"];
  currentEmailText = this.emailTexts[0];
  form: FormGroup = this.fb.group({
    user_name: '',
    user_email: '',
    user_message: ''
  });

  constructor(private fb: FormBuilder) { }

  sendEmail() {
    emailjs.send('service_b5t6tmp', 'template_zireym6', {
      user_name: this.form.value.user_name,
      user_email: this.form.value.user_email,
      user_message: this.form.value.user_message
    }, 'LYwK9tZhKYQL5jUnF')
      .then((response) => {
        console.log('Correo electrónico enviado:', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });
  }

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
