import { PlaceorderComponent } from './views/placeorder/placeorder.component';
import { ManageItemGuard } from './guards/manage-item.guard';
import { ManageItemsComponent } from './views/manage-items/manage-items.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {ManageCustomersComponent} from "./views/manage-customers/manage-customers.component";
import {ManageCustomerComponentCandeactivateGuard} from "./guards/manage-customer-component-candeactivate.guard";
import {MainComponent} from "./views/main/main.component";
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth.guard";

const appRoutes: Routes = [
  {
    path: "main",
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {path: "dashboard", component: DashboardComponent},
      
      {
        path: "manage-customers",
        component: ManageCustomersComponent,
        canDeactivate: [ManageCustomerComponentCandeactivateGuard]
      },
      {
        path:"manage-items",
        component:ManageItemsComponent,
        canDeactivate: [ManageItemGuard]
      }
      ,
      {
        path:"manage-order",
        component:PlaceorderComponent,
        
      }
      ,
      {
        path: "",
        pathMatch : "full",
        redirectTo: "/main/dashboard"
      }
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "", pathMatch: "full", redirectTo: "/main/dashboard"}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
