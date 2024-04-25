import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  txteyebutton = "View Site"
  txtgithubbutton = "Code FullStack"
  txtgithubbutton2 = "Code Frontend"
  txtgithubbutton3 = "Code Backend"

  cards = [
    { 
      imageUrl:'./assets/farmaciaSantaRosita.png',
      title:'Farmacia Santa Rosita APP',
      description:'Aplicación Web desarrollada para la gestión de inventario y ventas de la Farmacia Santa Rosita, utilizando Angular para el frontend y NodeJs con MySQL para el backend.',
      technologies: ['Angular17', 'HTML5', 'TypeScript', 'NodeJs', 'SCSS', 'MySQL', 'Bootstrap5'],
      codeUrl2: 'https://github.com/ludwingx/farmacia-santa-rosita-app-frontend',
      codeUrl3: 'https://github.com/ludwingx/farmacia-santa-rosita-app-backend' 
    },
    { 
      imageUrl:'./assets/amorConPatas.png',
      title:'Amor Con Patas APP',
      description:'Aplicación Web desarrollada con Laravel, PHP, MySQL y Bootstrap5, para dar en adopción animales de diferentes refugios de la Ciudad de Santa Cruz.',
      technologies: ['Laravel', 'PHP','JavaScript','AJAX', 'MySQL', 'Bootstrap5'],
      codeUrl: 'https://github.com/ludwingx/amor-con-patas-app'
      
    },
    { 
      imageUrl:'./assets/appCEA.png',
      title:'AppCea',
      description:'Aplicación Movil Web desarrollada con Ionic, Angular, PHP y MySQL para el Control y seguimiento de animales silvestres rescatados del Centro de Educación Ambiental del Gobierno '+ 
      'Autónomo Departamental de Santa Cruz',
      technologies: ['Angular14','HTML5', 'TypeScript',  'SCSS', 'Ionic6','PHP',, 'MySQL', 'Bootstrap5'],
      siteUrl: 'https://appcea.netlify.app/',
      codeUrl: 'https://github.com/ludwingx/AppCEA' 
    },
    { 
      imageUrl:'./assets/easybank.png',
      title:'EasyBank',
      description:'#RetoEasyBank de programación de una landing page, creada con Angular17 y Bootstrap5',
      technologies: ['Angular17', 'HTML5','TypeScript', 'SCSS', 'Bootstrap5'],
      siteUrl: 'https://6629c09daedc0a3421763ede--easybankbyludwing.netlify.app/',
      codeUrl2: 'https://github.com/ludwingx/Easybank-Challange'
    },
    { 
      imageUrl:'./assets/newHome.png',
      title:'News Homepage',
      description:'#RetoNewsHomepage de programación de una landing page, creada con Angular17 y Bootstrap5',
      technologies: ['Angular17','HTML5', 'Typescript', 'SCSS', 'Bootstrap5'],
      siteUrl: 'https://newhomepagebyludwing.netlify.app/',
      codeUrl2: 'https://github.com/ludwingx/news-homepage'
    },
    { 
      imageUrl:'./assets/multiStepForm.png',
      title:'MultiStepForm',
      description:'#RetoMultiStepForm de programación de una landing page, creada con Angular17 y Bootstrap5',
      technologies: ['Angular17', 'HTML5','Typescript', 'SCSS', 'Bootstrap5'],
      siteUrl: 'https://multistepformbyludwing.netlify.app/',
      codeUrl2: 'https://github.com/ludwingx/multi-step-form'
    },
    { 
      imageUrl:'./assets/alleyPlants.png',
      title:'Alley Plants',
      description:'Landing page, creada con Angular16 y Bootstrap5 para vivero de suculentas en Santa Cruz',
      technologies: ['Angular16','HTML5', 'Typescript', 'NodeJs', 'SCSS', 'MySQL', 'Bootstrap5'],
      codeUrl2: 'https://github.com/ludwingx/alley-plants'
    },
    { 
      imageUrl:'./assets/portfolio.png',
      title:'Portafolio',
      description:'LadingPage creada con Angular16 y Bootstrap5, con el fin de mostrar mis proyectos realizados',
      technologies: ['Angular16', 'HTML5','Typescript', 'SCSS', 'Bootstrap5'],
      siteUrl: 'https://portfoliobyludwing.netlify.app/',
      codeUrl2: 'https://github.com/ludwingx/my-portfolio'
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
  viewSite(card: any) {
    if (card.siteUrl) {
      window.open(card.siteUrl, '_blank');
    }
  }

  viewCode(card: any) {
    if (card.codeUrl) {
      window.open(card.codeUrl, '_blank');
    }
  }
  viewCode2(card: any) {
    if (card.codeUrl2) {
      window.open(card.codeUrl2, '_blank');
    }
  }
  viewCode3(card: any) {
    if (card.codeUrl3) {
      window.open(card.codeUrl3, '_blank');
    }
  }

  
}
