import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Observable } from 'rxjs';
import { Shade } from './shade';

@Injectable({
  providedIn: 'root'
})
export class ShadeServiceService {
  private shadesUrl: string;


  constructor(private http: HttpClient) { 
    this.shadesUrl = 'http://192.168.0.107:9090/shades/allShades'
  
  }
  public getAllShades():Observable<Shade[]>{
    return this.http.get<Shade[]>(this.shadesUrl)
  }
  public addShade(shade: Shade) {
    return this.http.post<Shade>(this.shadesUrl, shade);
  }
  public deleteShade(id1: number){
    return this.http.delete( `${this.shadesUrl}/${id1}`);
  }
  // public move(id1: number, move:number) {
  //   return this.http.post<Shade>(`${this.shadesUrl}/${id1}/${move}`, id1);
  // }
  public move(id1: number, value: number): Observable<any> {
    
    const params = new HttpParams()
    .append('value', value);
    return this.http.put(`${this.shadesUrl}/move/${id1}?${params}`, {params});
  }
}
