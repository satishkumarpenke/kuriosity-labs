import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { SearchPipe } from './shared/header/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FrontPageComponent,
    ProductsComponent,
    CartComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
