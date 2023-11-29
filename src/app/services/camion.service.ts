import { Injectable } from '@angular/core';
import { camion } from '../model/camion.model';
import { Marque } from '../model/marque.model';
@Injectable({
  providedIn: 'root'
})
export class CamionService {
  camions! : camion[];
  camion! : camion;
  marques!: Marque[];
  
 

  constructor() {
    this.marques = [ {idmar : 1, nommar : "TOYOTA"},
    {idmar : 2, nommar : "RENAULT"},
    {idmar : 3, nommar : "chevrolet"},
    {idmar : 4, nommar : "FORD"}];
    this.camions = [
    {idcamion : 1, nomcamion : "F-150", prixcamion: 35000 , description : "Le Ford F-150 est un camion pick-up populaire et polyvalent", marque : {idmar : 4, nommar : "FORD"}},
    {idcamion : 2, nomcamion : "Tacoma", prixcamion :  45000, description : "Le Toyota Tacoma est un camion compact durable et fiable", marque : {idmar : 1, nommar : "TOYOTA"}},
    {idcamion : 3, nomcamion :"Silverado", prixcamion : 55000, description : "Le Chevrolet Silverado 2500HD est un camion lourd conçu pour les tâches les plus exigeantes", marque : {idmar : 3, nommar : "CHEVROLET"}}
     ];
    }
    listecamion():camion[] {


return this.camions;
}
ajoutercamion( cam: camion){
this.camions.push(cam);
}
supprimercamion( cam: camion){
 
  const index = this.camions.indexOf(cam, 0);
  if (index > -1) {
  this.camions.splice(index, 1);
  }
  }
  consultercamion(id:number): camion{
    this.camion = this.camions.find(p => p.idcamion == id)!;
    return this.camion;
    }
    triercamion(){
      this.camions = this.camions.sort((n1,n2) => {
      if (n1.idcamion! > n2.idcamion!) {
      return 1;
      }
      if (n1.idcamion! < n2.idcamion!) {
      return -1;
      }
      return 0;
      });
      }
      
    updatecamion(c:camion)
{
// console.log(c);
this.supprimercamion(c);
this.ajoutercamion(c);
this.triercamion();
}
listemarques():Marque[] {
  return this.marques;
  }
  consultermarques(id:number): Marque{
    return this.marques.find(mar => mar.idmar == id)!;
    }
    rechercheparmarque(idmarq: number): camion[] {
      const filtredcamion=this.camions.filter((camion) => camion.marque?.idmar == idmarq);
      return filtredcamion;
    }
  
}