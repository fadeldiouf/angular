import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  list!:Categorie[]
  public formData!: FormGroup
  choixmenu: string= 'A';
  public host:string="http://localhost:8091/categories"
  constructor( private httpClient:HttpClient) { }
  public getCategorie():Observable<any>{
    return this.httpClient.get(this.host+"/all")
  }
  public saveCategorie(url: any,data: any){
    return this.httpClient.post(url,data);
  }
  public updateCategorie(id:number,value:any):Observable<object>{
    return this.httpClient.put(`${this.host+"/update"}/${id}`,value)
  }
  public  createCategorie(data:object):Observable<object>{
    return this.httpClient.post(`${this.host+"/save"}`,data)
  }
}
