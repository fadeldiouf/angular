import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Magasin } from '../models/magasin';
import { MagasinService } from '../services/magasin.service';

@Component({
  selector: 'app-list-magasin',
  templateUrl: './list-magasin.component.html',
  styleUrls: ['./list-magasin.component.css']
})
export class ListMagasinComponent implements OnInit {
magasin!:Magasin;
 control: FormControl= new FormControl('');
 p:number=1;
  constructor( public magasinService:MagasinService, public toastr:ToastrService,
    public route:Router, public formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.getMagasin()
  }
getMagasin(){
  this.magasinService.getAll()
  .subscribe(data=>{this.magasinService.list=data},
    err=>{console.log(err)})
}
SelectMagasin(data:Magasin){
  this.magasinService.choixmenu='M'
  this.magasinService.formData=this.formBuilder.group(Object.assign({},data))
  this.route.navigateByUrl("/updatemagasin")

}
}

