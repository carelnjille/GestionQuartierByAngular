import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  standalone: true,  
  imports: [FormsModule],  
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  email: string = '';  
  password: string = '';   

 constructor(private router: Router) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);
     
    this.router.navigate(['/accueil']);
  }
}
