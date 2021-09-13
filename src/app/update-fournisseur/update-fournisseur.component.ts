import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  constructor(public fournisseurService:FournisseurService, public toastr:ToastrModule,
    public route:Router, public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.fournisseurService.choixmenu=="A")
      {this.infoForm()};
  }
  infoForm(){
    this.fournisseurService.formData=this.formBuilder.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      addresse:['',[Validators.required]],
      telephone:['',[Validators.required]],
      email:['',[Validators.required]],
    }

    )
  }
  resetForm(){
    this.fournisseurService.formData.reset
  }
  onSubmite(){
   this.fournisseurService.updateFourniseur(this.fournisseurService.formData.value.id, this.fournisseurService.formData.value)
   .subscribe(data=>{console.log(data);
    this.route.navigateByUrl("/fournisseur")
  })
  }

}
