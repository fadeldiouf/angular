import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Depot } from '../models/depot';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  public host="http://localhost:8091/depots"
  choixmenu: string= 'A';
  list!: Depot[];
  public formData!: FormGroup;
  constructor( private httpClient:HttpClient) { }
 public getDepot(id:number):Observable<Depot>{
    return this.httpClient.get<Depot>(`${this.host}/${id}`);
  }
public  createDepot(data:object):Observable<object>{
    return this.httpClient.post(`${this.host+"/save"}`,data);
  }
 public updateDepot(id:number,value:any):Observable<object>{
    return this.httpClient.put(`${this.host+"/update"}/${id}`,value);
  }
 public getAll():Observable<any>{
    return this.httpClient.get(`${this.host+"/all"}`);

}
public saveDepot(url:any,data:any){
  return this.httpClient.post(url,data);
}
}
