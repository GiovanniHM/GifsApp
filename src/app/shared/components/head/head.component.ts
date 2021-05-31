import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GifsService } from 'src/app/modules/home/services/gifs.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private sg: GifsService) { }
  placeH: string = '';
  showFiller = false;

  dataSearh: string;

  searchFrom: FormGroup = this.fb.group({
    searchIn: [''],
  });

  @Output() gifsSearch = new EventEmitter<string>()



  ngOnInit(): void {
   console.log(this.dataSearh);
  }

  //Change palceholder
  changePlaceH(){
    if(this.placeH === ""){
      console.log("Clic")
      this.placeH = "Buscar ...";
      console.log(this.placeH)
    }
    else if(this.placeH === "Buscar ..."){
      console.log("borrar")
      this.placeH = "";
      console.log(this.placeH)
    }
  }

  //enter key
  gifSearch(){
  var data: string = this.searchFrom.get("searchIn").value;
  this.gifsSearch.emit(data);
  console.log(this.gifsSearch)
  this.sg.searchValor = data;
  this.sg.buscarGifs(this.sg.searchValor);




  }


}
