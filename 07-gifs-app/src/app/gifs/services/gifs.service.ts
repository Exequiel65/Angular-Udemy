import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchReponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey :string = 'Zt0SFw83CKHyNCUAnSRKgsFhkO83V5M5';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'

  public gifsList: Gif[] =[]
  constructor( private http: HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    tag = tag.toLocaleLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((old)=> old !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage()
  }


  private saveLocalStorage():void{
    localStorage.setItem("history", JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage():void{
    if (!localStorage.getItem('history') || this._tagsHistory.length === 0) {
      return
    }

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0])
  }
  public searchTag(tag: string):void{
    if (tag.length === 0) {
      return
    }
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<SearchReponse>(`${this.serviceUrl}/search`, {params})
    .subscribe((res) => {
      this.gifsList = res.data;
    })
  }




}
