import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maison-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="maison-card">
      <h3>{{ maison.categorie }}</h3>
      <p><strong>Superficie:</strong> {{ maison.superficie }} m²</p>
      <p><strong>Adresse:</strong> {{ maison.adresse }}</p>
      <button class="modifier">Modifier</button>
      <button class="detail">Détail</button>
    </div>
  `,
  styles: [`
    .maison-card {
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin-bottom: 16px;
      text-align: left;
    }

    .maison-card h3 {
      margin-top: 0;
    }

    .modifier {
      background-color: #4CAF50;
      color: white;
      border: none;
      padding: 6px 10px;
      margin-right: 8px;
      border-radius: 4px;
    }

    .detail {
      background-color: orange;
      color: white;
      border: none;
      padding: 6px 10px;
      border-radius: 4px;
    }
  `]
})
export class MaisonCardComponent {
  @Input() maison: any;
}
