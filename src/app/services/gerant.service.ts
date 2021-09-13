import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Gerant } from '../models/gerant';

@Injectable({
  providedIn: 'root'
})
export class GerantService {
  public host="http://localhost:8091/gerants"
  choixmenu: string= 'A';
  list!: Gerant[];
  public formData!: FormGroup
  constructor( private httpClient:HttpClient) { }
 public getGerant(id:number):Observable<Gerant>{
    return this.httpClient.get<Gerant>(`${this.host}/${id}`)
  }
public  createGerant(data:object):Observable<object>{
    return this.httpClient.post(`${this.host+"/save"}`,data)
  }
 public updateGerant(id:number,value:any):Observable<object>{
    return this.httpClient.put(`${this.host+"/update"}/${id}`,value)
  }
 public getAll():Observable<any>{
    return this.httpClient.get(`${this.host+"/all"}`)

}
public saveGerant(url:any,data:any){
  return this.httpClient.post(url,data)
}
}
