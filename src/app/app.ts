import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { ProductCard } from './shared/components/product-card/product-card';
import { ProductDetails } from './features/products/components/product-details/product-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, Footer, ProductCard, ProductDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('maestra-tere');
}
