import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, RouterLink,CurrencyPipe, FontAwesomeModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  //Falta hacer la llamada a la api luego se hara esto
  faWhatsapp = faWhatsapp;
  badge:string = 'primaria';
  productTitle:string = 'Kit Lectoescritura Vol. 1';
  productDescription:string = 'Actividades lúdicas diseñadas paso a paso para reforzar la lectura y escritura en primer grado.';
  price:number = 12;
}
