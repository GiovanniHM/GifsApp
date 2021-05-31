import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { HeadComponent } from './components/head/head.component';
import { HomeModule } from '../modules/home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HeadComponent
    ]
})
export class SharedModule { }
