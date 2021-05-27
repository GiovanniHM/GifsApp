import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { HeadComponent } from './components/head/head.component';
import { HomeModule } from '../modules/home/home.module';



@NgModule({
  declarations: [
    HeadComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HomeModule
  ],
  exports:[HeadComponent,
    AngularMaterialModule]
})
export class SharedModule { }
