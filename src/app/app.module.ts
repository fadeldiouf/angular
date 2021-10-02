import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
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
import { CommonModule, DatePipe } from '@angular/common';
import {MatDialogModule, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import{MatToolbarModule}from '@angular/material/toolbar';
import { AddDepotComponent } from './depots/add-depot/add-depot.component'
import { ListDepotComponent } from './depots/list-depot/list-depot.component';
import { LoginComponent } from './utilisateurs/login/login.component';
import { MenuComponent } from './menu/menu.component';

const Material_Module=[MatToolbarModule,MatIconModule];

@NgModule({
  declarations: [
    AppComponent,
    ListCategorieComponent,
    ListFournisseurComponent,
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
    NewMagasinComponent,
    AddDepotComponent,
    ListDepotComponent,
    LoginComponent,
    MenuComponent,

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
    MatDialogModule,
    CommonModule,
    
  ],
  exports:Material_Module,
  providers: [DatePipe, {provide: MAT_DIALOG_DATA, useValue:{},
  },{provide:MatDialogRef,useValue:{},}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
