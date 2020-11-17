import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(public _httpClient:HttpClient) { }

  getExchangeRate(currency):Observable<any>{
    return this._httpClient.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
  }
}
