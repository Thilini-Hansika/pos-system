import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageItemsComponent } from '../views/manage-items/manage-items.component';

@Injectable({
  providedIn: 'root'
})
export class ManageItemGuard implements CanDeactivate<ManageItemsComponent> {
  canDeactivate(component: ManageItemsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (component.frmItems.dirty){
      return confirm("Are you sure you want to discard your changes?");
    }
    return true;
  }

}
