import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
utilisateurrs:Utilisateur[]=[{"username":"admin","password":"admin","roles":['ADMIN']},
                          {"username":"fadel","password":"diouf","roles":['USER']}]
public loggedUser!:string;
public isconnect:boolean=false;
public roles!:string[];                          
  constructor() { }

  public authentification(utilisateur:Utilisateur):Boolean{
    let valide:Boolean=false;
    this.utilisateurrs.forEach((userconnect:any) => {
      if(utilisateur.username==userconnect.username && utilisateur.password==userconnect.password)
      valide=true;
      this.loggedUser= userconnect.username;
      this.isconnect=true;
      this.roles=userconnect.roles;
      localStorage.setItem('logged',this.loggedUser);
      localStorage.setItem('connect',String(this.isconnect)); 
    });
    return valide;
  }
  roleConnect():Boolean{
    if(!this.roles){
      return false;
    }
    else{
      return(this.roles.indexOf('ADMIN')>-1);
    }
    
  }
}
