import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  title = 'GifsApp';

  dataSearh: string;


  ngOnInit(): void {
   console.log(this.dataSearh)
  }
}


