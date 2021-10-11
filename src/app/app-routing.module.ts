import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityComponent } from './entity/entity.component';
import { TableOfShadesComponent } from './tableOfShades/tableOfShades.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators ,NgForm } from '@angular/forms';



const routes: Routes = [
  {path: 'shades/add', component: EntityComponent},
  {path: 'shades/allShades', component: TableOfShadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,  
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EntityComponent, TableOfShadesComponent]
