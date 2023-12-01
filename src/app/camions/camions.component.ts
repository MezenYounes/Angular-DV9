import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-camions',
  templateUrl: './camions.component.html',
  styleUrls: ['./camions.component.css']
})
export class CamionsComponent implements OnInit {
  
  
  
  camions! : camion[];

    constructor(private camionService: CamionService,
      public authService: AuthService) { }
ngOnInit(): void { 
      this.camions = this.camionService.listecamion();
      
    }
    supprimercamion(c: camion)
{
//console.log(c);
let conf = confirm("Etes-vous sûr ?");
 if (conf){
this.camionService.supprimercamion(c);
}
}    
    



}
