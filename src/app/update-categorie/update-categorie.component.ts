import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  constructor(public categorieService:CategorieService, public toastr:ToastrModule,
    public route:Router, public formBuilder:FormBuilder) { }

  ngOnInit(): void {
      {this.infoForm()};
  }
  infoForm(){
    this.categorieService.formData=this.formBuilder.group({
      nom:['',[Validators.required]],
      description:['',[Validators.required]],

    }

    )
  }
  resetForm(){
    this.categorieService.formData.reset
  }
  onSubmite(){
   this.categorieService.updateCategorie(this.categorieService.formData.value.id, this.categorieService.formData.value)
   .subscribe(data=>{console.log(data);
    this.route.navigateByUrl("/categorie")
  })
  }

}
