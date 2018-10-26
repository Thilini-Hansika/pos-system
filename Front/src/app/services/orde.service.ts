import { Order } from './../dtos/order';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";


export const MAIN_URL= "http://localhost:8080";
const URL="/api/v1/orders";

@Injectable()
export class OrdeService {

  constructor(private http:HttpClient) { }

  saveOrder(order: Order): Observable<boolean>{
    return this.http.post<boolean>(MAIN_URL + URL,order);
  }
}
