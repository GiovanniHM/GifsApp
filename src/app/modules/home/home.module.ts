import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { SearchComponent } from './components/search/search.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AngularMaterialModule } from 'src/app/shared/module/angular-material/angular-material.module';



@NgModule({
  declarations: [
    SearchComponent,
    HistoryComponent,
    GifsComponent,
    SearchComponent,
    PrincipalComponent



  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class HomeModule { }
