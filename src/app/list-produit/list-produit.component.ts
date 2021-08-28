import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
public categories:any
public produits:any
  constructor( public categorieService:CategorieService,
    public produitService:ProduitService, private router:Router,
    private activieRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getCategorie()
    this.getProduit()
  }
public getCategorie(){
  this.categorieService.getCategorie()
  .subscribe(data=>{this.categories=data},
    err=>{console.log(err)})
}
public getProduit(){
  this.produitService.getAll()
  .subscribe(data=>{this.produitService.list=data},
    err=>{console.log(err)})
}
getPoduitByCat(c:any){
  this.router.navigateByUrl("/produit/"+c.id)

}
}
