import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders()
  .append('content-type','application/json')
  .append('content-type','application/x-www-form-urlencoded')
  .append('Access-Control-Allow-Origin','*');
// headers=headers.append('content-type','application/json')
// headers=headers.append('Access-Control-Allow-Origin', '*')
// headers=headers.append('content-type','application/x-www-form-urlencoded')


  getCities():Observable<any>{
    const url ="http://localhost:3000/listcountries";
    return this.http.get(url,{ 'headers':this.headers });
  }
}
