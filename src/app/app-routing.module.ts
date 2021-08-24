import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListDepotComponent } from './list-depot/list-depot.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

const routes: Routes = [
 { path:"depot",component:ListDepotComponent} ,
 {path:"fournisseur",component:ListFournisseurComponent},
 {path:"categorie",component:ListCategorieComponent},
 {path:"produit",component:ListProduitComponent},
 {path:"addcategorie",component:NewCategorieComponent},
 {path:"updatecategorie/:id",component:UpdateCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
