import { Component, OnInit } from '@angular/core';
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //Valid placeholder
    if(this.searchFrom.get("searchIn").statusChanges._subscribe){
      console.log('focus')
      this.placeH === "Buscar ...";
    }
  }

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
}
