import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { Depot } from '../models/depot';
import { Produit } from '../models/produit';
import { CategorieService } from '../services/categorie.service';
import { DepotService } from '../services/depot.service';
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
  produit:Produit= new Produit();
  categorie:Categorie= new Categorie();
  depot:Depot= new Depot();
  produitFile:any;
  public imagePath:any;
  public message!: string;
  public imUrl:any;
  categories!:Categorie[];
  depots!:Depot[];
produitForm!: FormGroup;
  constructor( public produitService:ProduitService,public categorieService:CategorieService,
    public route:Router, public formBuilder:FormBuilder,public depotService:DepotService
    ) { }

  ngOnInit(): void {
   this.getCategorie();
   this.getDepot();
    if (this.categorieService.choixmenu=="A"){
    };
  }
  OnSelectFile(event:any){
    if(event.target.files.length >0){

    const file= event.target.files[0];
    this.produitFile= file;

      return;
    }
    }
    
  public getCategorie(){
    this.categorieService.getCategorie()
    .subscribe(data=>{this.categorieService.list=data
      this.categories= data;
    },
      err=>{console.log(err)})
  }
  public getDepot(){
    this.depotService.getAll()
    .subscribe(data=>{this.depotService.list=data
      this.depots= data;
    },
      err=>{console.log(err)})
  }
    onSubmit(){
      if(this.categorieService.choixmenu =="A"){
        this.addData();
      }
      else{
          this.updateData();
      }

  }
  addData(){
    const formData = new FormData();
    const produit= this.produit;
    const categorie= this.categorie;
    const depot = this.depot;
    formData.append("produit",JSON.stringify(produit));
    formData.append("idCat",JSON.stringify(categorie));
    formData.append("idDep",JSON.stringify(depot));
    formData.append("file",this.produitFile);
    this.produitService.saveProduit(formData).subscribe(data=>{
      this.route.navigate(["/produit"])
    })
      
    

  }
  updateData(){

  }
  saveProduit(){
    const formData= new FormData();
    formData.append("produit",JSON.stringify(this.produit));
    formData.append("idCat",JSON.stringify(this.categorie));
    this.produitService.saveProduit(formData);
  }
  

}
