import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsService } from '../../services/gifs.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  gifs:Gif[] = [];
  dataSource: MatTableDataSource<Gif> = new MatTableDataSource<Gif>(this.gifs);



  get resultados(){
    return this.sg.resultado;
  }



  constructor(public sg: GifsService,
              private ch:ChangeDetectorRef

              ) { }


  ngAfterViewInit() {

    this.ch.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

}

  ngOnInit(): void {


    this.sg.buscarGifs('trending').subscribe((gifstrs) =>
    {

      var DataGifDesJson = JSON.parse(
        JSON.stringify(gifstrs)
    );
      this.gifs = DataGifDesJson.data;
      this.dataSource.data = this.gifs
    })





  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  //Paginator




  // OnPageChange(event: PageEvent){
  //   let startIndex = event.pageIndex * event.pageSize;
  //   let endIndex = startIndex + event.pageSize;
  //   if(endIndex > this.sg.length){
  //     endIndex = this.sg.length;
  //   }
  //   this.sg.pagedList = this.sg.productsList.slice(startIndex, endIndex);
  // }

  // onResize(event) { //to adjust to screen size
  //   this.sg.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  // }




}


