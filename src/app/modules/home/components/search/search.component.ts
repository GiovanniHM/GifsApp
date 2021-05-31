import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  placeH: string = '';

  searchFrom: FormGroup = this.fb.group({
    searchIn: [''],
  });

  @Output() gifsSearch = new EventEmitter<string>()


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {


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
    this.gifsSearch = this.searchFrom.get("searchIn").value;
  }
}
