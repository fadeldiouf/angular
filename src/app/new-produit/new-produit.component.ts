import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Produit } from '../models/produit';
import { CategorieService } from '../services/categorie.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {
  selectedFile:any;
  progress:any;
  currentFile:any;
  produit!:Produit;
  categorie!:Categorie;
  categories!:Categorie[];
produitForm!: FormGroup;
  constructor( public produitService:ProduitService,public categorieService:CategorieService,
    public route:Router, public formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.produitForm=this.formBuilder.group(
      {
        nom:['',[Validators.required]],
        description:['',[Validators.required]],
        prixunitaire:['',[Validators.required]],
        photo:['',[Validators.required]],
      }
    )

  }
  OnSelectFile(envent:any): void{
    this.selectedFile =envent.target.files
  }
  public getCategorie(){
    this.categorieService.getCategorie()
    .subscribe(data=>{this.categorieService.list=data
      this.categories= data;
    },
      err=>{console.log(err)})
  }
  saveProduit(){
    const formData= new FormData();
    formData.append("produit",JSON.stringify(this.produit));
    formData.append("idCat",JSON.stringify(this.categorie));
    this.produitService.saveProduit(formData);
  }
  

}
