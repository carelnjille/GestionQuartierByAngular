import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuartierCardComponent } from '@components/quartier-card/quartier-card.component';
@Component({
  selector: 'app-quartiers',
  standalone: true,
  imports: [CommonModule, FormsModule, QuartierCardComponent],
  templateUrl: './quartiers.component.html',
  styleUrls: ['./quartiers.component.css']
})
export class QuartiersComponent {
  nom = '';
  superficie: number | null = null;
  nbMaisons: number | null = null;

  quartiers = [
    { nom: 'Simbock', superficie: 1200, nbMaisons: 10 },
    { nom: 'Biyem-assi', superficie: 950, nbMaisons: 8 },
    { nom: 'Jouvance', superficie: 1500, nbMaisons: 15 },
  ];

  ajouterQuartier() {
    if (this.nom && this.superficie && this.nbMaisons !== null) {
      this.quartiers.push({
        nom: this.nom,
        superficie: this.superficie,
        nbMaisons: this.nbMaisons
      });

      this.nom = '';
      this.superficie = null;
      this.nbMaisons = null;
    }
  }
}
