import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaisonCardComponent } from '../../components/maison-card/maison-card.component';

@Component({
  selector: 'app-maisons',
  standalone: true,
  imports: [CommonModule, FormsModule, MaisonCardComponent],
  templateUrl: './maisons.component.html',
  styleUrls: ['./maisons.component.css']
})
export class MaisonsComponent {
  categorie = '';
  superficie: number | null = null;
  adresse = '';

  maisons = [
    { categorie: 'Villa', superficie: 120, adresse: 'Simbock,Maison Blanche,Rue 1' },
    { categorie: 'Appartement', superficie: 85, adresse: 'badem-badem, 3-poto' },
    { categorie: 'Studio', superficie: 40, adresse: 'Bapes2,toiture rouge, entree Riviere' },
  ];

  ajouterMaison() {
    if (this.categorie && this.superficie && this.adresse) {
      this.maisons.push({
        categorie: this.categorie,
        superficie: this.superficie,
        adresse: this.adresse
      });

      this.categorie = '';
      this.superficie = null;
      this.adresse = '';
    }
  }
}
