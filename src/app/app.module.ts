import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListDepotComponent } from './list-depot/list-depot.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategorieComponent,
    ListFournisseurComponent,
    ListDepotComponent,
    ListProduitComponent,
    NewCategorieComponent,
    UpdateCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
