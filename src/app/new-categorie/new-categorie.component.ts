import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from '../categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.css']
})
export class NewCategorieComponent implements OnInit {

  constructor( public categorieService:CategorieService,private router:Router,
    private toastr: ToastrService, private fb:FormBuilder
    ) { }

    ngOnInit(): void {
      if (this.categorieService.choixmenu=="A"){
        this.infoForm()
      };
    }
    infoForm(){
      this.categorieService.formData= this.fb.group({
        id:null,
        nom:['',[Validators.required]],
        description:   ['',[Validators.required]],
  
      });
    }
    resetForm(){
      this.categorieService.formData.reset();
    }
    onSubmite(){
    if(this.categorieService.choixmenu =="A"){
      this.addData();
    }
    else{
        this.updateData();
    }
  }
  addData(){
    let categorie :Categorie;
    categorie= this.categorieService.formData.value
    this.categorieService.createCategorie(categorie).subscribe(data=>
    {
      console.log(data);
      this.toastr.success('categorie enregistrer avec success')
      this.router.navigate(['/categorie'])
    }

  )
  }
  updateData(){
    let  categorie :Categorie
    categorie= this.categorieService.formData.value
    this.categorieService.updateCategorie(categorie.id,categorie).subscribe(
    data=>{console.log(data);
      this.router.navigate(['/categorie'])
    }
  )


  }
  
}
