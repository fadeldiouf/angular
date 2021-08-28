import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fournisseur } from '../models/fournisseur';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
  public gerant!:Fournisseur;
  control: FormControl= new FormControl('');
    constructor(public fournisseurService:FournisseurService, public formBuilder:FormBuilder,
      public route:Router, public toastr:ToastrService
      ) { }

    ngOnInit(): void {
      this.getGerant()
    }
    public getGerant(){
      return this.fournisseurService.getAll()
      .subscribe(data=>{this.fournisseurService.list=data},
        err=>{console.log(err)}
        )
    }
    SelectFournisseur(data:Fournisseur){
    this.fournisseurService.choixmenu='M'
    this.fournisseurService.formData=this.formBuilder.group(Object.assign({},data))
    this.route.navigateByUrl("/updatefournisseur")

    }

}
