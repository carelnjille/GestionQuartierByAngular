import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  nom: string = '';
  description: string = '';

  categories = [
    { nom: 'Résidentielle', description: 'Habitations individuelles ou collectives.' },
    { nom: 'Commerciale', description: 'Boutiques, marchés, centres commerciaux.' },
    { nom: 'Industrielle', description: 'Usines, entrepôts, ateliers.' },
    { nom: 'Administrative', description: 'Bâtiments gouvernementaux, mairies.' },
    { nom: 'Éducative', description: 'Écoles, lycées, universités.' },
    { nom: 'Hospitalière', description: 'Hôpitaux, cliniques, centres de santé.' },
    { nom: 'Religieuse', description: 'Églises, mosquées, temples.' }
  ];

  ajouterCategorie() {
    if (this.nom.trim()) {
      this.categories.push({
        nom: this.nom,
        description: this.description
      });

      this.nom = '';
      this.description = '';
    }
  }
}
