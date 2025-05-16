import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Pour utiliser ngModel dans le formulaire
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  standalone: true,  // Pour rendre ce composant autonome
  imports: [FormsModule],  // Importation nécessaire pour utiliser les formulaires
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  email: string = '';  // Email de l'utilisateur
  password: string = '';  // Mot de passe de l'utilisateur

 constructor(private router: Router) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
    // Redirection directe sans vérification
    this.router.navigate(['/accueil']);
  }
}
