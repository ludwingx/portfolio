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
      imageUrl:'./assets/pp.jpg',
      title:'EasyBank',
      description:'#RetoEasyBank de programación de una landing page, creada con Angular17 y Bootstrap5',
    },
    { 
      imageUrl:'./assets/pp.jpg',
      title:'News Homepage',
      description:'#RetoNewsHomepage de programación de una landing page, creada con Angular17 y Bootstrap5',
    },
    { 
      imageUrl:'./assets/pp.jpg',
      title:'Alley Plants',
      description:'Landing page, creada con Angular16 y Bootstrap5',
    },
    { 
      imageUrl:'./assets/pp.jpg',
      title:'Portafolio',
      description:'LadingPage creada con Angular16 y Bootstrap5, con el fin de mostrar mis proyectos realizados',
    }
  ]
  formatDescription(description: string): string {
    // Definir múltiples patrones y reemplazos
    const replacements = [
      { pattern: /#RetoEasyBank/g, link: 'https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN' },
      { pattern: /#RetoNewsHomepage/g, link: 'https://www.frontendmentor.io/challenges/news-homepage-4uTIT6jCd' },
      // Puedes agregar más patrones y enlaces aquí según sea necesario
    ];

    // Aplicar los reemplazos en la descripción
    for (const replacement of replacements) {
      description = description.replace(replacement.pattern, `<a target="_blank" href="${replacement.link}">#Reto</a>`);
    }

    return description;
  }
}
