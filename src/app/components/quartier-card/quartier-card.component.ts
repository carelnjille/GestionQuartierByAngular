import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quartier-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quartier-card.component.html',
  styleUrls: ['./quartier-card.component.css']
})
export class QuartierCardComponent {
  @Input() nom!: string;
  @Input() superficie!: number;
  @Input() nbMaisons!: number;
}
