import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MagasinService } from '../services/magasin.service';

@Component({
  selector: 'app-update-magasin',
  templateUrl: './update-magasin.component.html',
  styleUrls: ['./update-magasin.component.css']
})
export class UpdateMagasinComponent implements OnInit {

  constructor(public magasinService:MagasinService, public toastr:ToastrModule,
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


}
