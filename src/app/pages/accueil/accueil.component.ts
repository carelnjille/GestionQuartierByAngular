import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  categories = ['Appartement', 'Villa', 'Studio', 'Duplex', 'Maison basse', 'Immeuble', 'Bungalow'];
  quartiers = ['Simbock ', 'Biyem-assi', 'Jouvance'];
  maisons = ['Simbock,Maison Blanche,Rue 1', 'badem-badem, 3-poto', 'Bapes2,toiture rouge, entree Riviere'];
}
