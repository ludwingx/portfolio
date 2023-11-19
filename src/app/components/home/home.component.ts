import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
  btnCv = 'Descargar CV';
  btnContact = 'Contactame!';

}
