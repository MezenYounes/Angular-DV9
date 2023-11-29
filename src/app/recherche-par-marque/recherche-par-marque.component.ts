import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { Marque } from '../model/marque.model';
import { CamionService } from '../services/camion.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {

    
  camions! : camion[];
marques!: Marque[];
idMarque!: number ;
 
     constructor(private camionService: CamionService
) {  
}
ngOnInit(): void { 
      this.marques = this.camionService.listemarques();
      this.camions = this.camionService.listecamion();
      console.log(this.marques);
    }
    onChange() {
  
      this.camions = this.camionService.rechercheparmarque(this.idMarque);
    }
}
