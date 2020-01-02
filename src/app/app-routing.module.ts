import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// bing in layout
import { DefaultComponent } from "./layout/default/default.component";
import { BlankComponent } from "./layout/blank/blank.component";
// layout ends here

// bring in components
import { ProductsComponent } from "./components/products/products.component";
import { UsersComponent } from "./components/users/users.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: BlankComponent,
    children: [{ path: "", component: LoginComponent }]
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "products", component: ProductsComponent },
      { path: "users", component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
