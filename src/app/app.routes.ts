import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeconnexionComponent } from './pages/deconnexion/deconnexion.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { QuartiersComponent } from './pages/quartiers/quartiers.component';
import { MaisonsComponent } from './pages/maisons/maisons.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent },
    { path: 'accueil', component: AccueilComponent },
  { path: 'deconnexion', component: DeconnexionComponent },
  { path: 'quartiers', component: QuartiersComponent },
  { path: 'maisons', component: MaisonsComponent },
  { path: 'categories', component: CategoriesComponent },
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}