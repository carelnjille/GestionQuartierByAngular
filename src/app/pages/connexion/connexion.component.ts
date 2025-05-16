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
export class ConnexionComponent {}
