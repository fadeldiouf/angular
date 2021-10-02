import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
utilisateur:Utilisateur=new Utilisateur();
public smsError=0;

  constructor( private authentificationService:AuthentificationService,
               private router:Router) { }

  ngOnInit(): void {
  }
connecter(){
  console.log(this.utilisateur)
  let connect:Boolean=this.authentificationService.authentification(this.utilisateur)
  if(connect){
    this.router.navigateByUrl("/produit")
  }
  else{
    this.smsError=1;
  }
}
}
