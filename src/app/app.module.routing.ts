import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';


const Routes: Routes = [
    {
      path: 'products',
      component: ProductListComponent,
    },
    {
        path: 'products/:id',
        component: ProductFormComponent,
        outlet: 'second-outlet',    
      },
    ];


    @NgModule({
        imports: [RouterModule.forChild(Routes)],
        exports: [RouterModule]
      })
    export class RoutingModule { }
      