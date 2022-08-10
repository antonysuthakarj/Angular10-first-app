import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// Import the page/menu components
import {AboutusComponent} from './aboutus/aboutus.component';
import {ProductsComponent} from './products/products.component';

const router : Routes = [
    {
        path: 'aboutus',
        component: AboutusComponent
    }, {
        path: 'products',
        component: ProductsComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})
export class AppRoutingModule { };
