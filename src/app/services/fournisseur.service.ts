import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  choixmenu: string= 'A';
  list!: Fournisseur[];
  public formData!: FormGroup
   public host:string="http://localhost:8091/fournisseurs"
  constructor( private httpClient:HttpClient) { }
  public getFourniseurs(){
    return this.httpClient.get(this.host+"/all")
  }
  public saveFournisseur(url:any,data:any){
    return this.httpClient.post(url,data)

  }
  public updateFourniseur(id:number,value:any):Observable<object>{
    return this.httpClient.put(`${this.host+"/update"}/${id}`,value)
  }
  public getAll():Observable<any>{
    return this.httpClient.get(`${this.host+"/all"}`)
  }
}
