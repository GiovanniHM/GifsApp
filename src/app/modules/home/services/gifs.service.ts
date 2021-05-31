import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

 public searchValor: string;


  private apiKey: string = 'hrEjmdKq060IyOpazMePT0LSDemCjN0L';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = []

  public resultado:Gif[] = [];

  constructor(private http:HttpClient) { }

  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);
    console.log(`${this.servicioURL}/search`,{params});

   console.log(params.toString())
    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`,{params})
    .subscribe((resp: SearchGifsResponse) =>{
      console.log(resp.data)
      this.resultado = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultado));

    })
    }

}
