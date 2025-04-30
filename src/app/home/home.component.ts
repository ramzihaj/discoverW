import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// Liste des pays (à adapter selon ton besoin)
pays = [
  {
    id: 1,
    nom: 'France',
    description: 'La France est célèbre pour la Tour Eiffel et sa gastronomie.',
    image: 'assets/france.jpg'
  },
  {
    id: 2,
    nom: 'Japon',
    description: 'Le Japon mélange modernité et tradition avec Tokyo et Kyoto.',
    image: 'assets/japan.jpg'
  },
  {
    id: 3,
    nom: 'Italie',
    description: 'L’Italie séduit par ses monuments historiques et sa cuisine.',
    image: 'assets/italy.jpg'
  }
];

imagesSliderDroite = [
  'assets/slider1.jpg',
  'assets/slider2.jpg',
  'assets/slider3.jpg'
];
}
