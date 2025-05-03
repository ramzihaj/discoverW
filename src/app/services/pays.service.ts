import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  private pays = [
    {
      id: '1',
      nom: 'France',
      description: 'La France est connue pour sa culture, sa gastronomie, et ses paysages variés.',
      continent: 'Europe',
      visiteurs: 89000000,
      langues: ['Français'],
      image: 'assets/france.jpg'
    },
    {
      id: '2',
      nom: 'Japon',
      description: 'Le Japon séduit par son mélange unique de traditions anciennes et de technologies modernes.',
      continent: 'Asie',
      visiteurs: 32000000,
      langues: ['Japonais'],
      image: 'assets/japan.jpg'
    },
    {
      id: '3',
      nom: 'Italie',
      description: 'L’Italie offre un patrimoine historique exceptionnel, une cuisine mondialement connue et des paysages magnifiques.',
      continent: 'Europe',
      visiteurs: 64000000,
      langues: ['Italien'],
      image: 'assets/italy.jpg'
    }
  ];

  constructor() { }

  getPaysById(id: string) {
    return this.pays.find(p => p.id === id);
  }

  getAllPays() {
    return this.pays;
  }
}
