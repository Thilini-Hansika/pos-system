import { OrdeService } from './../../services/orde.service';
import { Order } from './../../dtos/order';
import { Component, OnInit ,ViewChild} from '@angular/core';
import { ItemService } from './../../services/item.service';
import { Item } from './../../dtos/item';
import {NgForm} from "@angular/forms";
import { Customer } from '../../dtos/customer';
import { OrderDetail } from '../../dtos/orderdetail';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  items: Array<Item> = [];
  order:Array<Order>=[];
  selectedOrder: Order = new Order();
  selectedItem:Item= new Item();
  id:string;

  seletedCustomer:Customer= new Customer();
  tempItem: Item = null;
  tempOrder:Order = null;
  selectedOrderDetail:OrderDetail= new OrderDetail();
  manuallySelected: boolean = false;
  @ViewChild("frmOrders") frmOrders: NgForm;

  constructor( private orderservice:OrdeService , private customerservice:CustomerService , private itemservice:ItemService) { }

  ngOnInit() {
    this.loadAllItems();
  }

  clear(): void {
    let index = this.items.indexOf(this.selectedItem);
    if (index !== -1) {
      this.items[index] = this.tempItem;
      this.tempItem = null;
    }
    this.selectedItem = new Item();
    this.manuallySelected = false;
  }

  selectItem(item: Item): void {
    this.clear();
    this.selectedItem = item;
    this.tempItem.id = Object.assign({}, item.id);
    this.manuallySelected = true;
  }

  selectOrder(order: Order): void {
    this.clear();
    this.selectedOrder = order;
    this.tempOrder = Object.assign({});
    this.manuallySelected = true;
  }

  loadAllItems(): void {
    this.itemservice.getAllItems().subscribe(
      (result) => {
        this.items = result;
        console.log(this.items);
      }
    )
  }

  searchByItemCode():void{
    this.itemservice.searchById(this.id).subscribe(
      (result)=>{
        this.items = result;
      }
    );
  }

  saveOrder(): void{
    // this.customerservice.saveCustomer(this.seletedCustomer)
    // this.itemservice.saveItem(this.selectedItem);
    // this.orderservice.saveOrder(this.selectedOrder);
     this.orderservice.saveOrder(this.selectedOrder).subscribe(
      (result)=>{
        if (result){
          alert("Item has been saved successfully");
          // this.loadAllItems();
        }else{
          alert("Failed to save the Item");
        }
      }
    )
  }
}

