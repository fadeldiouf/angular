import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GerantService } from '../services/gerant.service';

@Component({
  selector: 'app-new-gerant',
  templateUrl: './new-gerant.component.html',
  styleUrls: ['./new-gerant.component.css']
})
export class NewGerantComponent implements OnInit {

  constructor( private gerantService:GerantService, private router:Router,
   public magasinService:GerantService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
onSaveGerant(data:any){
  return this.gerantService.saveGerant(this.gerantService.host+"/save",data)
  .subscribe(res=>{
    this.toastr.success('le gerant a ete bien enregister')
    this.router.navigateByUrl("/gerant")
  },
  err=>{console.log(err)}
  )
}
getMagasin(){
  this.magasinService.getAll()
  .subscribe(data=>{this.magasinService.list=data},
    err=>{console.log(err)})
}
}
