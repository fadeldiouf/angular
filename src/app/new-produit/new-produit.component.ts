import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.css']
})
export class NewProduitComponent implements OnInit {
  public selectFile:any;
  public progres:any;
  public currenceFileUpload:any
  public produit:any

  constructor( public produitService:ProduitService,
    public route:Router, public formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.infoForm();
  }
  infoForm(){
    this.produitService.formData=this.formBuilder.group({
      nom:['',[Validators.required]],
      description:['',[Validators.required]],
      prixunitaire:['',[Validators.required]],
      phot:['',[Validators.required]],
    }

    )
  }
  resetForm(){
    this.produitService.formData.reset
  }
  onSubmit(){
    this.produitService.createProduit(this.produitService.formData.value)
    .subscribe(data=>{console.log(data);
     this.route.navigateByUrl("/produit")
   })
   }
   onSelectFile(event:any){
     this.selectFile=event.target.files;

   }
   upload(){
     this.progres = 0;
     this.currenceFileUpload = this.selectFile.item(0);
     this.produitService.uploadPhoto(this.currenceFileUpload,this.produit.id).subscribe(event=>{
       if(event.type===HttpEventType.UploadProgress){
         this.progres = Math.round(100 * event.loaded)
       }
       else if(event instanceof HttpResponse){
         alert ("probleme de chargement..")
       }

     },err=>{
       alert("probleme de chargement..")
     })

   }

}
