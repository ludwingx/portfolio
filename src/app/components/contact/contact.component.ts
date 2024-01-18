import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  /* validaciones de los campos */
  name =new FormControl ('', Validators.required);
  email =new FormControl ('', [Validators.email,Validators.required]);
  message = new FormControl ('', Validators.required);
  form: FormGroup = this.fb.group({
    name: '',
    email: '',
    message: ''
  });
  constructor(private fb: FormBuilder) { }
    /* enviar email */
  async sendEmail() {
    emailjs.init('LYwK9tZhKYQL5jUnF'); 
    let response = await emailjs.send("service_b5t6tmp","template_zireym6",{ 
      name: this.form.value.name, 
      email: this.form.value.email,
      message: this.form.value.message

      }).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
     }, (err) => {
        console.log('FAILED...', err);
     });
  }
  /* cada 2 segundos se cambia el texto de email  */
  emailTexts = ["ludwingarmijosaavedra@hotmail.com", "ludwingarmijosaavedra@gmail.com"];
  currentEmailText = this.emailTexts[0];
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
