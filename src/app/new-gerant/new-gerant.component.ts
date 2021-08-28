import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GerantService } from '../services/gerant.service';

@Component({
  selector: 'app-new-gerant',
  templateUrl: './new-gerant.component.html',
  styleUrls: ['./new-gerant.component.css']
})
export class NewGerantComponent implements OnInit {

  constructor( private gerantService:GerantService, private router:Router) { }

  ngOnInit(): void {
  }
onSaveGerant(data:any){
  return this.gerantService.saveGerant(this.gerantService.host+"/save",data)
  .subscribe(res=>{
    this.router.navigateByUrl("/gerant")
  },
  err=>{console.log(err)}
  )
}
}
