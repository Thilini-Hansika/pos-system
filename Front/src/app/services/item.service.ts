import { Item } from './../dtos/item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";


export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/items";

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) { }

  getAllItems(): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(MAIN_URL + URL);
  }

  deleteItem(id: string): Observable<boolean>{
    return this.http.delete<boolean>(MAIN_URL+ URL + "/" + id);
  }

  saveItem(item: Item): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,item);
  }

  getTotalItem(): Observable<number>{
    return this.http.get<number>(MAIN_URL + URL + "/count");
  }

  searchById(id:string): Observable<Array<Item>>{
    return this.http.get<Array<Item>>(MAIN_URL + URL + "/"  + id);
 }
 

}
