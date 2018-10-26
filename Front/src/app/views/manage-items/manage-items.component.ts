import { ItemService } from './../../services/item.service';
import { Item } from './../../dtos/item';
import { Component, OnInit,ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {

  items: Array<Item> = [];
  selectedItem: Item = new Item();
  tempItem: Item = null;
  manuallySelected: boolean = false;
  @ViewChild("frmItems") frmItems: NgForm;

  constructor(private itemservice:ItemService) { }

  ngOnInit() {
    this.loadAllItems();
  }

  loadAllItems(): void {
    this.itemservice.getAllItems().subscribe(
      (result) => {
        this.items = result;
        console.log(this.items);
      }
    )
  }

  deleteItem(item: Item): void {
    if (confirm("Are you sure you want to delete this customer?")) {
      this.itemservice.deleteItem(item.id).subscribe(
        (result) => {
          if (result) {
            alert("Customer has been deleted successfully");
          } else {
            alert("Failed to delete the customer");
          }
          this.loadAllItems();
        }
      )
    }
  }

  selectItem(item: Item): void {
    this.clear();
    this.selectedItem = item;
    this.tempItem = Object.assign({}, item);
    this.manuallySelected = true;
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

  saveItem(): void{
    this.itemservice.saveItem(this.selectedItem).subscribe(
      (result)=>{
        if (result){
          alert("Item has been saved successfully");
          this.loadAllItems();
        }else{
          alert("Failed to save the Item");
        }
      }
    )
  }

}
