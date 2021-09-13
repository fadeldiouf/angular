import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {
  public categorie!:Categorie;
  control: FormControl= new FormControl('');
  constructor( public categorieService:CategorieService ,public route:Router,
    public builderForm: FormBuilder) { }

  ngOnInit(): void {
    this.getCategorie();

  }
  public getCategorie(){
    this.categorieService.getCategorie()
    .subscribe(data=>{this.categorieService.list=data},
      err=>{console.log(err)})
  }
  SelectCategorie(data:Categorie){
    this.categorieService.choixmenu='M'
    this.categorieService.formData=this.builderForm.group(Object.assign({},data))
    this.route.navigateByUrl("/addcategorie")

  }

}
