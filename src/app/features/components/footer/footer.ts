import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage,RouterModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
}
