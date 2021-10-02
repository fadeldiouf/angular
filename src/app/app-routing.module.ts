import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepotComponent } from './depots/add-depot/add-depot.component';
import { ListDepotComponent } from './depots/list-depot/list-depot.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListGerantComponent } from './list-gerant/list-gerant.component';
import { ListMagasinComponent } from './list-magasin/list-magasin.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import { NewFournisseurComponent } from './new-fournisseur/new-fournisseur.component';
import { NewGerantComponent } from './new-gerant/new-gerant.component';
import { NewMagasinComponent } from './new-magasin/new-magasin.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { UpdateGerantComponent } from './update-gerant/update-gerant.component';
import { UpdateMagasinComponent } from './update-magasin/update-magasin.component';
import { LoginComponent } from './utilisateurs/login/login.component';

const routes: Routes = [
 { path:"depot",component:ListDepotComponent} ,
 {path:"fournisseur",component:ListFournisseurComponent},
 {path:"categorie",component:ListCategorieComponent},
 {path:"produit",component:ListProduitComponent},
 {path:"",redirectTo:"utilisateur",pathMatch:"full"},
 {path:"addcategorie",component:NewCategorieComponent},
 {path:"updatecategorie",component:UpdateCategorieComponent},
 {path:"addfournisseur", component:NewFournisseurComponent},
 {path:"updatefournisseur",component:UpdateFournisseurComponent},
 {path:"gerant", component:ListGerantComponent},
 {path:"addgerant",component:NewGerantComponent},
 {path:"updategerant",component:UpdateGerantComponent},
 {path:"magasin",component:ListMagasinComponent},
 {path:"addmagasin",component:NewMagasinComponent},
 {path:"updatemagasin",component:UpdateMagasinComponent},
 {path:"addproduit",component:NewProduitComponent},
 {path:"adddepot",component:AddDepotComponent},
 {path:"utilisateur",component:LoginComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
