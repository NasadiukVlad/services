import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';
import {UserRoutingModule} from './user.routing';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  imports: [
    CommonModule, UserRoutingModule, SharedAppModule
  ],
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserEditInfoComponent,
    UserOrdersComponent
  ]
})
export class UserModule {
}
