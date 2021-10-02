import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Depot } from 'src/app/models/depot';
import { Fournisseur } from 'src/app/models/fournisseur';
import { DepotService } from 'src/app/services/depot.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-add-depot',
  templateUrl: './add-depot.component.html',
  styleUrls: ['./add-depot.component.css']
})
export class AddDepotComponent implements OnInit {
fournisseurs!:Fournisseur[];
idfournisseur!:number;
fournisseur!:Fournisseur;
  constructor(public depotService:DepotService, public fb:FormBuilder,
              public fournisseurService:FournisseurService,
              private router:Router,private toastr:ToastrService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public dialog:MatDialogRef<AddDepotComponent>,
              ) { }

  ngOnInit(): void {
    if (this.depotService.choixmenu=="A"){
      this.infoForm()
    };
    this.fournisseurService.getAll().subscribe(data=>{
      this.fournisseurService.list= data;
      this.fournisseurs=data;
    })
  }
  infoForm(){
    this.depotService.formData= this.fb.group({
      id:null,
      libelle:['',[Validators.required]],
      date:   ['',[Validators.required]],
      quantiteinitial: ['',[Validators.required]],
      quantitecourant: ['',[Validators.required]],
      fournisseur:     ['',[Validators.required]],

    });
  }
  resetForm(){
    this.depotService.formData.reset();
  }
  onSubmit(){
  if(this.depotService.choixmenu =="A"){
    this.addData();
  }
  else{
      this.updateData();
  }
}
addData(){
    let depot :Depot
    depot= this.depotService.formData.value
    depot.fournisseur=this.fournisseur;
    this.depotService.createDepot(depot).subscribe(data=>
    {
      console.log(data);
      this.toastr.success('depot enregistrer avec success')
      this.router.navigate(['/depot'])
    }

  )
}
updateData(){
     let depot :Depot
    depot= this.depotService.formData.value
    depot.fournisseur=this.fournisseur;
    this.depotService.updateDepot(depot.id,depot).subscribe(
    data=>{console.log(data);
      this.router.navigate(['/depot'])
    }
  )

}
public getfournisseurById(id:number){
  return this.fournisseurService.getFournisseur(this.idfournisseur)
  .subscribe(data=>{
    this.fournisseur = data
},
    err=>{console.log(err)}
    )
}

onChange(event:any) {
  this.idfournisseur = event
  this.getfournisseurById(this.idfournisseur)
}
}
