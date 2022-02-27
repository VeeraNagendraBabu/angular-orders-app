import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './app-data/app-dataservice.service';
import { DbService } from './app-data/db.service';
import { CustomerByIdPipe } from './app-data/pipes/app-customer-by-id.pipe';
import { ProductByIdPipe } from './app-data/pipes/app-product-by-id.pipe';

import { AppComponent } from './app.component';
import { SelectedCustomerPageComponent } from './customers/selected-customer-page.component';
import { OrdersPageComponent } from './orders/orders-page.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersPageComponent,
  },
  {
    path: 'customer',
    component: SelectedCustomerPageComponent,
  },
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerByIdPipe,
    ProductByIdPipe,
    OrdersPageComponent,
    SelectedCustomerPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DbService),
    CommonModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
