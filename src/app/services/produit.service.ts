import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public host:string="http://localhost:8091/produits"
  list!: Produit[];
  public formData!: FormGroup
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
  public uploadPhoto(file:File,id:any):Observable<HttpEvent<{}>>{
    let formData: FormData= new FormData()
    formData.append('file',file)
    const req= new HttpRequest('POST',this.host+"/uploadphoto"+id,formData,{
      reportProgress:true,
      responseType:'text',
    })
    return this.httpClient.request(req)

  }
}
