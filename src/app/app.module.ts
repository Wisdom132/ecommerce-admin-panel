import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./partials/navbar/navbar.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { SidebarComponent } from "./partials/sidebar/sidebar.component";
import { DefaultComponent } from "./layout/default/default.component";
import { BlankComponent } from "./layout/blank/blank.component";
import { ProductsComponent } from "./components/products/products.component";
import { UsersComponent } from "./components/users/users.component";
import { SubnavComponent } from "./partials/subnav/subnav.component";
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    DefaultComponent,
    BlankComponent,
    ProductsComponent,
    UsersComponent,
    SubnavComponent,
    LoginComponent,
    AddProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
