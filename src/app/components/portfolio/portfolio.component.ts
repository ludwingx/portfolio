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
      imageUrl:'./assets/farmaciaSantaRosita.png',
      title:'Farmacia Santa Rosita APP',
      description:'Aplicación Web desarrollada para la gestión de inventario y ventas de la Farmacia Santa Rosita, utilizando Angular para el frontend y NodeJs con MySQL para el backend.',
      technologies: ['Angular17', 'HTML', 'TypeScript', 'NodeJs', 'SCSS', 'MySQL', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/amorConPatas.png',
      title:'Amor Con Patas APP',
      description:'Aplicación Web desarrollada con Laravel, PHP, MySQL y Bootstrap5, para dar en adopción animales de diferentes refugios de la Ciudad de Santa Cruz.',
      technologies: ['Laravel', 'PHP','JavaScript','AJAX', 'MySQL', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/appCEA.png',
      title:'AppCea',
      description:'Aplicación Movil Web desarrollada con Ionic, Angular, PHP y MySQL para el Control y seguimiento de animales silvestres rescatados del Centro de Educación Ambiental del Gobierno '+ 
      'Autónomo Departamental de Santa Cruz',
      technologies: ['Angular17','HTML', 'TypeScript',  'SCSS', 'Ionic','PHP',, 'MySQL', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/easybank.png',
      title:'EasyBank',
      description:'#RetoEasyBank de programación de una landing page, creada con Angular17 y Bootstrap5',
      technologies: ['Angular17', 'HTML','TypeScript', 'SCSS', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/newHome.png',
      title:'News Homepage',
      description:'#RetoNewsHomepage de programación de una landing page, creada con Angular17 y Bootstrap5',
      technologies: ['Angular17','HTML', 'Typescript', 'SCSS', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/multiStepForm.png',
      title:'MultiStepForm',
      description:'#RetoMultiStepForm de programación de una landing page, creada con Angular17 y Bootstrap5',
      technologies: ['Angular17', 'HTML','Typescript', 'SCSS', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/alleyPlants.png',
      title:'Alley Plants',
      description:'Landing page, creada con Angular16 y Bootstrap5',
      technologies: ['Angular16','HTML', 'Typescript', 'NodeJs', 'SCSS', 'MySQL', 'Bootstrap5'],
    },
    { 
      imageUrl:'./assets/portfolio.png',
      title:'Portafolio',
      description:'LadingPage creada con Angular16 y Bootstrap5, con el fin de mostrar mis proyectos realizados',
      technologies: ['Angular16', 'HTML','Typescript', 'SCSS', 'Bootstrap5'],
    }
  ]
  formatDescription(description: string): string {
    // Definir múltiples patrones y reemplazos
    const replacements = [
      { pattern: /#RetoEasyBank/g, link: 'https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN' },
      { pattern: /#RetoNewsHomepage/g, link: 'https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl' },
      { pattern: /#RetoMultiStepForm/g, link: 'https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ' },
      // Puedes agregar más patrones y enlaces aquí según sea necesario
      
    ];
    

    // Aplicar los reemplazos en la descripción
    for (const replacement of replacements) {
      description = description.replace(replacement.pattern, `<a target="_blank" href="${replacement.link}">#Reto</a>`);
    }
    

    return description;
  }
  
}
