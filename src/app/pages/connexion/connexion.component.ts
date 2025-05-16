import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ConnectComponent } from '../../components/connect/connect.component'; 

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, ConnectComponent],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  // email: string = '';
  // password: string = '';

  // constructor(private router: Router) {} // ✅ On injecte le Router ici

  // onSubmit() {
  //   console.log('Email:', this.email);
  //   console.log('Mot de passe:', this.password);

  //   // ✅ Peu importe les données, on redirige vers /accueil
  //   this.router.navigate(['/accueil']);
  // }
}
