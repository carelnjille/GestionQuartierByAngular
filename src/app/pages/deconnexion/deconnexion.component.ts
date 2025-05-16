import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisconnectComponent } from '@components/disconnect/disconnect.component';
@Component({
  selector: 'app-deconnexion',
  standalone: true,
  imports: [CommonModule, DisconnectComponent],
  template: `
    <section class="page-deconnexion">
      <h2>Déconnexion</h2>
      <app-disconnect></app-disconnect>
    </section>
  `,
  styles: [`
    .page-deconnexion {
      text-align: center;
      margin-top: 30px;
    }
  `]
})
export class DeconnexionComponent {}
