import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-aboutme',
  templateUrl: '../aboutme/aboutme.component.html',
  styleUrls: ['../aboutme/aboutme.component.scss']
})
export class AboutmeComponent {
  txtAboutme = 'Soy estudiante universitario de la carrera de Ingeniería de Sistemas y estudiante autodidacta de Desarrollo Web Fullstack.';
  txtAboutme2 = ' Aspiro conseguir empleo en el mundo del Desarrollo Web, adquirir experiencia, nuevos conocimientos y fortalecer mi vida profesional.';
  txtAboutme3 = 'Siendo una persona responsable y proactiva, me gusta proponerme metas y siempre estoy dispuesto a adquirir nuevos conocimientos. ';
  photoLudwing: string;
  constructor(private http: HttpClient) {
    // Ruta de la imagen en la carpeta "assets"
    this.photoLudwing = 'assets/photo1.jfif';

    // Cargar la imagen
    this.http.get(this.photoLudwing, { responseType: 'blob' }).subscribe(data => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoLudwing = e.target.result;
      };
      reader.readAsDataURL(data);
    });
  }
}
