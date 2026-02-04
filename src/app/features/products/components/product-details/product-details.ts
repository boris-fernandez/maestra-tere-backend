import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faCheckCircle, faCheck, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../../../shared/components/product-card/product-card';


@Component({
  selector: 'app-product-details',
  imports: [FontAwesomeModule, CurrencyPipe, NgOptimizedImage, RouterLink, CurrencyPipe, ProductCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  faWhatsapp = faWhatsapp;
  faCheckCircle = faCheckCircle;
  faCheck = faCheck;
  faLock = faLock;
  faArrowLeft = faArrowLeft;

  images:string[] = [
    "Image_g5wb0w.png",
    "logoMaestraTere_d08txo.png",
    "Screenshot_2025-10-15_103358_f2pdrl.png",
    "logoMaestraTere_d08txo.png",
    "Image_g5wb0w.png",
    "Screenshot_2025-10-15_103358_f2pdrl.png"
  ];
  badge:string = 'PRIMARIA';
  format:string = 'WORD'
  productTitle:string = 'Kit Lectoescritura Vol. 1';
  productDescription: string = 'Programa educativo compuesto por actividades lúdicas, interactivas y cuidadosamente estructuradas paso a paso, orientadas a reforzar y consolidar las habilidades fundamentales de lectura y escritura en estudiantes de primer grado de educación primaria. Las actividades están diseñadas para acompañar el proceso de aprendizaje inicial, promoviendo el reconocimiento de letras y palabras, la comprensión lectora, la correcta formación de oraciones y el desarrollo de la escritura, todo a través del juego, la exploración y la participación activa del estudiante. Este enfoque favorece la motivación, la autonomía, la creatividad y el aprendizaje significativo, adaptándose al ritmo y nivel de cada niño.';
  price:number = 12; 
  benefits:string[] = ["50 fichas de trabajo imprimibles de alta resolución.", " Guía didáctica con sugerencias paso a paso.", "Juegos de memorama y lotería de sílabas.", "Evaluaciones diagnósticas iniciales y finales."];

  selectedImage: string = this.images[0];

  changeImage(newImage: string) {
    this.selectedImage = newImage;
  }
}
