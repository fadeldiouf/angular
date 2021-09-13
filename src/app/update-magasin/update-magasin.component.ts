import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { Gerant } from '../models/gerant';
import { GerantService } from '../services/gerant.service';
import { MagasinService } from '../services/magasin.service';

@Component({
  selector: 'app-update-magasin',
  templateUrl: './update-magasin.component.html',
  styleUrls: ['./update-magasin.component.css']
})
export class UpdateMagasinComponent implements OnInit {
  idGerant!:number;
  gerants!:Gerant[];
  gerant!: Gerant;

  constructor(public magasinService:MagasinService,public gerantService:GerantService,
     public toastr:ToastrModule,
    public route:Router, public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.magasinService.choixmenu=='A'){
      this.infoForm();
    }
  }
  infoForm(){
    this.magasinService.formData=this.formBuilder.group({
      nom:['',[Validators.required]],
      date:['',[Validators.required]],
      addresse:['',[Validators.required]],
      telephone:['',[Validators.required]],
      email:['',[Validators.required]],
    }

    )
  }
  resetForm(){
    this.magasinService.formData.reset
  }
  onSubmite(){
   this.magasinService.updateMagasin(this.magasinService.formData.value.id, this.magasinService.formData.value)
   .subscribe(data=>{console.log(data);
    this.route.navigateByUrl("/magasin")
  })
  }
  public getGerant(){
    return this.gerantService.getAll()
    .subscribe(data=>{this.gerantService.list=data
    this.gerants = data
  },
      err=>{console.log(err)}
      )
  }

  public getGerantById(id:number){
    return this.gerantService.getGerant(this.idGerant)
    .subscribe(data=>{
      this.gerant = data
  },
      err=>{console.log(err)}
      )
  }

  onChange(event:any) {
    this.idGerant = event
    this.getGerantById(this.idGerant)
}


}
