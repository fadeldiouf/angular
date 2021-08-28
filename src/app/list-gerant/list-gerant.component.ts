import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gerant } from '../models/gerant';
import { GerantService } from '../services/gerant.service';

@Component({
  selector: 'app-list-gerant',
  templateUrl: './list-gerant.component.html',
  styleUrls: ['./list-gerant.component.css']
})
export class ListGerantComponent implements OnInit {
public gerant!:Gerant;
control: FormControl= new FormControl('');
  constructor(public gerantService:GerantService, public formBuilder:FormBuilder,
    public route:Router, public toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.getGerant()
  }
  public getGerant(){
    return this.gerantService.getAll()
    .subscribe(data=>{this.gerantService.list=data},
      err=>{console.log(err)}
      )
  }
  SelectGerant(data:Gerant){
  this.gerantService.choixmenu='M'
  this.gerantService.formData=this.formBuilder.group(Object.assign({},data))
  this.route.navigateByUrl("/updategerant")

  }
}
