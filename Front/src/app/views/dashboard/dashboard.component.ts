import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import { ItemService } from '../../services/item.service';
import { count } from 'rxjs/internal/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalCustomers: number = 20;
  totalItems: any[];

  constructor(private customerService: CustomerService ,private itemservice:ItemService) { }

  ngOnInit() {
    this.getTotalCustomers();
    this.getTotalItem();
  }

  getTotalCustomers(): void{
    this.customerService.getTotalCustomers().subscribe(
      (count) =>{
        this.totalCustomers = count;
      }
    )
  }

  getTotalItem():void{
    this.itemservice.getAllItems().subscribe(
      (count)=>{
        this.totalItems = count;
      }
    )
  }

}
