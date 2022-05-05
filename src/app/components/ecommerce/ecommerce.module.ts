import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    NgbModule
  ]
})
export class EcommerceModule { }
