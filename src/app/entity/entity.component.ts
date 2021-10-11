import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shade } from '../shade';
import { ShadeServiceService } from '../shade-service.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent{

  shade: Shade;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private shadeService: ShadeServiceService) {
          this.shade = new Shade();
         }

  onSubmit() {
    this.shadeService.addShade(this.shade).subscribe(result => this.gotoShadesList());
  }

  gotoShadesList(){
    this.router.navigate(['/shades/allShades'])
  }
}
