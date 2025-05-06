import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Pour ngModel
import { RouterModule } from '@angular/router';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  pays: any[] = [];
  filteredPays: any[] = [];
  filterNom: string = '';
  filterContinent: string = '';
  imagesSliderDroite = [
    'assets/slider1.jpg',
    'assets/slider2.jpg',
    'assets/slider3.jpg',
    'assets/slider4.jpg',
    'assets/slider5.jpg',
    'assets/slider6.jpeg'
  ];

  constructor(private paysService: PaysService) {}

  ngOnInit(): void {
    this.pays = this.paysService.getAllPays();
    this.filteredPays = [...this.pays]; // Copie initiale
  }

  applyFilter(): void {
    this.filteredPays = this.pays.filter(p => {
      const matchesNom = p.nom.toLowerCase().includes(this.filterNom.toLowerCase());
      const matchesContinent = !this.filterContinent || p.continent === this.filterContinent;
      return matchesNom && matchesContinent;
    });
  }
}
