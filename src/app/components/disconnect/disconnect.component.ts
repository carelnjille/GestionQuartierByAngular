import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-disconnect',
  standalone: true,
  imports: [CommonModule, DisconnectComponent],
  template: `
    
  
  <div class="message-box">
    <!-- Si la déconnexion n'a pas encore été effectuée, affiche le bouton -->
    <div *ngIf="!isLoggedOut">
      <h2 class="title">Êtes-vous sûr de vouloir vous déconnecter ?</h2>
      <button class="btn-deconnexion" (click)="handleDeconnexion()">Se déconnecter</button>
    </div>

    <!-- Si la déconnexion est en cours, affiche le message -->
    <div *ngIf="isLoggedOut">
      <p class="description">Nous procédons à votre déconnexion. Vous serez redirigé sous peu.</p>
      <h2 class="title">Déconnexion en cours...</h2>
    </div>
  </div>
 

 
  `,
  styles: [`
    .disconnect-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #f7f7f7;
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.message-box {
  background-color: #fff;
  margin-block:40px;
  margin-inline:35%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
 border: 1px solid rgba(41, 40, 40, 0.1) ;
  height: 40%;
  max-width: 400px;
  z-index:5;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 20px;
}

.btn-deconnexion {
  padding: 14px 20px;
  margin-block: 10px;
  background-color: #e74c3c; /* Rouge vif */
  color: #fff;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-deconnexion:hover {
  background-color: #c0392b; /* Rouge foncé */
}

.btn-deconnexion:focus {
  outline: none;
}

  `]
})
export class DisconnectComponent implements OnInit {

  constructor(private router: Router) {}

  isLoggedOut: boolean = false;

  ngOnInit(): void {
     
  }

   handleDeconnexion() {
     
    this.isLoggedOut = true;

   
    localStorage.removeItem('authToken');

     
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
