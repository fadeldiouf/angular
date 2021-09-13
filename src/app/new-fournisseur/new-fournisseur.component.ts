import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-new-fournisseur',
  templateUrl: './new-fournisseur.component.html',
  styleUrls: ['./new-fournisseur.component.css']
})
export class NewFournisseurComponent implements OnInit {

  constructor( private fournisseurService:FournisseurService, private router:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
  }
  onSaveFournisseur(data:any){
    return this.fournisseurService.saveFournisseur(this.fournisseurService.host+"/save",data)
    .subscribe(res=>{this.router.navigateByUrl("/fournisseur");
    this.toastr.success('le fournisseur a ete bien enregister')
  },
    err=>{console.log(err)}
    )

  }

}
