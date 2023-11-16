import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {


  cards = [
    { 
      imageUrl:'./assets/itjmLogo.png',
      title:'Técnico Superior en Sistemas Informáticos',
      description:'2020-2022',
    },
    { 
      imageUrl:'./assets/upcLogo.png',
      title:'Ingeniería de Sistemas',
      description:'2021-En curso',
    }
  ]
}
