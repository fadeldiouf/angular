import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  public categories:any;
  constructor( private categorieService:CategorieService ,private route:Router) { }

  ngOnInit(): void {
    this.getCategorie();

  }
  public getCategorie(){
    this.categorieService.getCategorie()
    .subscribe(data=>{this.categories=data},
      err=>{console.log(err)})
  }
  onEditCategorie(c: any){
    let url=c._links.self.href;
   this.route.navigateByUrl("/updatecategorie/"+btoa(url));
  }

}
