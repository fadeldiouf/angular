import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.css']
})
export class NewCategorieComponent implements OnInit {

  constructor( private categorieService:CategorieService,private router:Router) { }

  ngOnInit(): void {
  }
  onSaveCategorie(data: any){
   this.categorieService.saveCategorie(this.categorieService.host+"/save",data)
   .subscribe(result=>{
     this.router.navigateByUrl("/categorie")
   },
   err=>{
     console.log(err);
   })
  }
}
