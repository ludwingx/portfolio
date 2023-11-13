import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  txteyebutton = "View Site"
  txtgithubbutton = "Code"

  cards = [
    { 
      imageUrl:'./assets/photo1.jfif',
      title:'AppCea',
      description:'Aplicación Movil Web desarrollada con Ionic, Angular, PHP y MySQL para el Centro de Educación Ambiental del Gobierno'+ 
      ' Autónomo Departamental de Santa Cruz',
    },
    { 
      imageUrl:'./assets/photo1.jfif',
      title:'AppCea',
      description:'Aplicación Movil Web desarrollada con Ionic, Angular, PHP y MySQL para el Centro de Educación Ambiental del Gobierno'+ 
      ' Autónomo Departamental de Santa Cruz',
    }

  ]
}
