import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public host:string="http://localhost:8091/produits";
  list!: Produit[];
  public formData!: FormGroup;
  choixmenu:string ='A';
  constructor( private httpClient:HttpClient) { }
 public getProduit(id:number):Observable<object>{
    return this.httpClient.get(`${this.host}/${id}`)
  }
public  createProduit(data:object):Observable<object>{
    return this.httpClient.post(`${this.host+"/save"}`,data)
  }
 public updateProduit(id:number,value:any):Observable<object>{
    return this.httpClient.put(`${this.host+"/update"}/${id}`,value)
  }
 public getAll():Observable<any>{
    return this.httpClient.get(`${this.host+"/all"}`)
  }
  public getUrl(url:any){
    return this.httpClient.get(this.host+url)
  }
  public  saveProduit(formData:FormData){
    return this.httpClient.post(`${this.host+"/saveProduit"}`,formData)
  }
}
