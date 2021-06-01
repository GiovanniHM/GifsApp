import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public resultado:Gif[] = [];


 public searchValor: string;


  private apiKey: string = 'hrEjmdKq060IyOpazMePT0LSDemCjN0L';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  public _historial: string[] = []





  // //Paginator
  // // MatPaginator Inputs
  // productsList: Gif[]= [];
  // pagedList: Gif[]= [];
  // breakpoint: number = 3;  //to adjust to screen
  // // MatPaginator Inputs
  // length: number = 0;
  // pageSize: number = 3;  //displaying three cards each row
  // pageSizeOptions: number[] = [3, 6, 9, 12];






  constructor(private http:HttpClient) { }

  buscarGifs(query:string) : Observable<SearchGifsResponse[]>{
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '100')
          .set('q', query);


    console.log(`${this.servicioURL}/search`,{params});

   console.log(params.toString())
   const url =`${this.servicioURL}/search`
   return this.http.get<SearchGifsResponse[]>(url,{params})



    // .subscribe((resp: SearchGifsResponse) =>{
    //   console.log(resp.data)
    //   this.resultado = resp.data;
    //   localStorage.setItem('resultados', JSON.stringify(this.resultado));



      // this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      // this.productsList = resp.data;
      // this.pagedList = this.productsList.slice(0, 3);
      // this.length = this.productsList.length;

    }
    }
