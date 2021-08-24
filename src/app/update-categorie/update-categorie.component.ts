import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  constructor( private categorieService:CategorieService,
    private route:Router, private routeActive:ActivatedRoute
    ) { }

  ngOnInit(): void {
    let url= atob(this.routeActive.snapshot.params.id);
    console.log(url);
  }

}
