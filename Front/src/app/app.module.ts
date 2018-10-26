import { OrdeService } from './services/orde.service';
import { ItemService } from './services/item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ManageCustomersComponent } from './views/manage-customers/manage-customers.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomerService} from "./services/customer.service";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule} from "@angular/forms";
import {ManageCustomerComponentCandeactivateGuard} from "./guards/manage-customer-component-candeactivate.guard";
import { LoginComponent } from './views/login/login.component';
import { MainComponent } from './views/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";
import { ManageItemsComponent } from './views/manage-items/manage-items.component';
import { PlaceorderComponent } from './views/placeorder/placeorder.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomersComponent,
    LoginComponent,
    MainComponent,
    ManageItemsComponent,
    PlaceorderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CustomerService,
    OrdeService,
    ItemService,
    ManageCustomerComponentCandeactivateGuard,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
