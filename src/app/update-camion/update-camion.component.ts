import { Component, OnInit } from '@angular/core';
import { camion } from '../model/camion.model';
import { CamionService } from '../services/camion.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-update-camion',
  templateUrl: './update-camion.component.html',
  styleUrls: ['./update-camion.component.css']
})
export class UpdateCamionComponent implements OnInit {
 
  currentcamion = new camion();
  marques! : Marque[];
updatedmarId? : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private camionService: CamionService) { }
      ngOnInit() {
        this.marques = this.camionService.listemarques();
        this.currentcamion = this.camionService.consultercamion(this.activatedRoute.snapshot. params['id']);
        this.updatedmarId=this.currentcamion.marque?.idmar;
        }
        updatecamion()
        { //console.log(this.currentcamion);
          this.currentcamion.marque=this.camionService.consultermarques(this.updatedmarId!);
        this.camionService.updatecamion(this.currentcamion);
        this.router.navigate(['camions']);

}}
