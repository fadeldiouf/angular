import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { GerantService } from '../services/gerant.service';

@Component({
  selector: 'app-update-gerant',
  templateUrl: './update-gerant.component.html',
  styleUrls: ['./update-gerant.component.css']
})
export class UpdateGerantComponent implements OnInit {

  constructor(public gerantService:GerantService, public toastr:ToastrModule,
    public route:Router, public formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.gerantService.choixmenu=="A")
      {this.infoForm()};
  }
  infoForm(){
    this.gerantService.formData=this.formBuilder.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      addresse:['',[Validators.required]],
      telephone:['',[Validators.required]],
      email:['',[Validators.required]],
      civilite:['',[Validators.required]],
      genre:['',[Validators.required]],
      cni:['',[Validators.required]],
    }

    )
  }
  resetForm(){
    this.gerantService.formData.reset
  }
  onSubmite(){
   this.gerantService.updateGerant(this.gerantService.formData.value.id, this.gerantService.formData.value)
   .subscribe(data=>{console.log(data);
    this.route.navigateByUrl("/gerant")
  })
  }

}
