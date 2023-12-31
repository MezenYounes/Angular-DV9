import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';


@Component({
  selector: 'app-rechercheparnom',
  templateUrl: './rechercheparnom.component.html',
  styleUrls: ['./rechercheparnom.component.css']
})
export class RechercheparnomComponent implements OnInit {
  
  camions! : camion[];
  searchTerm!: string;
  nomcamion!: string;
  constructor(private camionService: CamionService
    ) {  
    }
    ngOnInit(): void { 
          this.camions = this.camionService.listecamion();
   
  }
 


}
