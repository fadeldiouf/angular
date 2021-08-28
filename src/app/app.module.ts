import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListDepotComponent } from './list-depot/list-depot.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NewCategorieComponent } from './new-categorie/new-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { NewFournisseurComponent } from './new-fournisseur/new-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { ListGerantComponent } from './list-gerant/list-gerant.component';
import { NewGerantComponent } from './new-gerant/new-gerant.component';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { UpdateGerantComponent } from './update-gerant/update-gerant.component';
import { ListMagasinComponent } from './list-magasin/list-magasin.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateMagasinComponent } from './update-magasin/update-magasin.component';
import { NewMagasinComponent } from './new-magasin/new-magasin.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListCategorieComponent,
    ListFournisseurComponent,
    ListDepotComponent,
    ListProduitComponent,
    NewCategorieComponent,
    UpdateCategorieComponent,
    NewFournisseurComponent,
    UpdateFournisseurComponent,
    ListGerantComponent,
    NewGerantComponent,
    NewProduitComponent,
    UpdateGerantComponent,
    ListMagasinComponent,
    UpdateMagasinComponent,
    NewMagasinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,







  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
