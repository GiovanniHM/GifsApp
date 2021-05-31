import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  get resultados(){
    return this.sg.resultado;
  }

  constructor(public sg: GifsService) { }

  ngOnInit(): void {
  }

}
