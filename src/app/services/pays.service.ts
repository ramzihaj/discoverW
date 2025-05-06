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
      image: 'assets/france.jpg',
      meilleurSiteTouristique: 'Tour Eiffel, Paris' // Nouveau champ
    },
    {
      id: '2',
      nom: 'Japon',
      description: 'Le Japon séduit par son mélange unique de traditions anciennes et de technologies modernes.',
      continent: 'Asie',
      visiteurs: 32000000,
      langues: ['Japonais'],
      image: 'assets/japan.jpg',
      meilleurSiteTouristique: 'Mont Fuji, Yamanashi'
    },
    {
      id: '3',
      nom: 'Italie',
      description: 'L’Italie offre un patrimoine historique exceptionnel, une cuisine mondialement connue et des paysages magnifiques.',
      continent: 'Europe',
      visiteurs: 64000000,
      langues: ['Italien'],
      image: 'assets/italy.jpg',
      meilleurSiteTouristique: 'Colisée, Rome'
    }
  ];

  constructor() { }

  getPaysById(id: string) {
    return this.pays.find(p => p.id === id);
  }

  getAllPays() {
    return this.pays;
  }

  addPays(newPays: any) {
    this.pays.push({
      id: newPays.id.toString(),
      nom: newPays.nom,
      description: newPays.description,
      continent: newPays.continent || 'Non spécifié',
      visiteurs: newPays.visiteurs || 0,
      langues: newPays.langues || ['Non spécifié'],
      image: newPays.image,
      meilleurSiteTouristique: newPays.meilleurSiteTouristique || 'Non spécifié' // Gérer le nouveau champ
    });
  }

  updatePays(id: string, updatedPays: any) {
    const index = this.pays.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pays[index] = { ...this.pays[index], ...updatedPays };
    }
  }
}
