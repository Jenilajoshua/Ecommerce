import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiurl="https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { }
  public sendget(){
    return this.http.get(this.apiurl)
  }
}
