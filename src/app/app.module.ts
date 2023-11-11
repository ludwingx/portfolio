import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutmeComponent } from './components/home/aboutme/aboutme.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/home/portfolio/portfolio.component';
import { EducationComponent } from './components/home/education/education.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ContactComponent } from './components/home/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutmeComponent,
    HomeComponent,
    PortfolioComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
