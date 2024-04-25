import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  welcomeMessage = '</Hello World>';
  name = 'Ludwing';
  lastName = 'Armijo Saavedra';
  portfolioMessage = 'Este es mi portafolio como desarrollador web';
  btnCv = 'Ver CV';
  btnContact = 'Contactame!';
  goToCv() {
    window.open('/assets/CV_LUDWING_ARMIJO_SAAVEDRA.pdf', '_blank');
  }
}
