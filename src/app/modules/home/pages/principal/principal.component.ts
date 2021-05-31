import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(public sg: GifsService) { }

  ngOnInit(): void {
  }

}
