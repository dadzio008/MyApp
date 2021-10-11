import { Component, OnInit } from '@angular/core';
import { Shade } from '../shade';
import { ShadeServiceService } from '../shade-service.service';

@Component({
  selector: 'app-table',
  templateUrl: 'tableOfShades.component.html',
  styleUrls: ['tableOfShades.component.css']
})
export class TableOfShadesComponent implements OnInit {

  

  
  shades: Shade[] = [];
  shade: Shade;
  


  constructor(private shadeService: ShadeServiceService) {
    this.shade = new Shade();
   }

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 101;
  min = 0;
  showTicks = false;
  value = 0;
  vertical = false;
  formatThumbLabel(value: number) {
    return value + '%';
   }
  
   

  ngOnInit(){
    this.getAllShades();

  }
  public getAllShades(): void{
  this.shadeService.getAllShades().subscribe(data => {
    this.shades = data;
  });
}
  public deleteShade(id1: number){
    this.shadeService.deleteShade(id1).subscribe ( data =>{
      console.log(data);
      this.getAllShades();    
  });
   
}


  move(id1: number, value: number) {

    this.shadeService.move(id1, value).subscribe ( data =>{      
      console.log(data);
      this.shade = data;
      this.getAllShades();
    })
  }

}