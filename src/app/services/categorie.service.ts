import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  public host:string="http://localhost:8091/categories"
  constructor( private httpClient:HttpClient) { }
  public getCategorie(){
    return this.httpClient.get(this.host+"/all")
  }
  public saveCategorie(url: any,data: any){
    return this.httpClient.post(url,data);
  }
}
