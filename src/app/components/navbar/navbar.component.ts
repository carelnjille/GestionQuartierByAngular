import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOpen: boolean = false;
  isLoginPage: boolean = false; // Variable pour vérifier si l'utilisateur est sur la page de connexion

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifier la route actuelle au moment de la navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Vérifier si l'utilisateur est sur la page de connexion
        this.isLoginPage = this.router.url.includes('/connexion');
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
