import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Magasin } from '../models/magasin';

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
private host="http://localhost:8091/magasins"
  choixmenu: string= 'A';
  list!: Magasin[];
  public formData!: FormGroup
  constructor( private httpClient:HttpClient) { }
 public getMagasin(id:number):Observable<object>{
    return this.httpClient.get(`${this.host}/${id}`)
  }
public  createMagasin(data:object):Observable<object>{
    return this.httpClient.post(`${this.host+"/save"}`,data)
  }
 public updateMagasin(id:number,value:any):Observable<object>{
    return this.httpClient.put(`${this.host+"/update"}/${id}`,value)
  }
 public getAll():Observable<any>{
    return this.httpClient.get(`${this.host+"/all"}`)
  }


}
