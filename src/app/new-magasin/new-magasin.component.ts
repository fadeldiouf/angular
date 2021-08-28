import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GerantService } from '../services/gerant.service';
import { MagasinService } from '../services/magasin.service';

@Component({
  selector: 'app-new-magasin',
  templateUrl: './new-magasin.component.html',
  styleUrls: ['./new-magasin.component.css']
})
export class NewMagasinComponent implements OnInit {

  constructor(public magasinService:MagasinService, public toastr:ToastrService,
    public route:Router, public formBuilder:FormBuilder,
    public gerantService:GerantService
    ) { }

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
  onSubmit(){
   this.magasinService.createMagasin(this.magasinService.formData.value)
   .subscribe(data=>{console.log(data);
    this.route.navigateByUrl("/magasin")
  })
  }

}
