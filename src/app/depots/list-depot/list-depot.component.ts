import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Depot } from 'src/app/models/depot';
import { DepotService } from 'src/app/services/depot.service';
import { AddDepotComponent } from '../add-depot/add-depot.component';

@Component({
  selector: 'app-list-depot',
  templateUrl: './list-depot.component.html',
  styleUrls: ['./list-depot.component.css']
})
export class ListDepotComponent implements OnInit {

  public depot!:Depot;
control: FormControl= new FormControl('');
  constructor(public depotService:DepotService, public formBuilder:FormBuilder,
    public route:Router, public toastr:ToastrService,
   private matDialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<AddDepotComponent>,
    ) { }

  ngOnInit(): void {
    this.getDepot()
  }
  public getDepot(){
    return this.depotService.getAll()
    .subscribe(data=>{this.depotService.list=data},
      err=>{console.log(err)}
      )
  }
  SelectDepot(data:Depot){
  this.depotService.choixmenu='M'
  this.depotService.formData=this.formBuilder.group(Object.assign({},data))
  this.route.navigateByUrl("/adddepot")

  }
  addGerant(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    this.matDialog.open(AddDepotComponent,dialogConfig);
  }

}
