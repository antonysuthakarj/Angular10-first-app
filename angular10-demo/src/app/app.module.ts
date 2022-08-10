import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

// Import the page/menu components
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductsComponent } from './products/products.component';

// Define the page/menu routing path and component
const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    // Include the router module
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

