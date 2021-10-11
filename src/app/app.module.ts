import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ShadeServiceService } from './shade-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,  
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,     
    MatFormFieldModule,   
    MatNativeDateModule,  
  ],
  exports: [  
    MatButtonModule,  
    MatInputModule,    
    MatInputModule,  
    BrowserAnimationsModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatNativeDateModule, 
  ],  
  providers: [ShadeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
