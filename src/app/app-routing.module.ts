import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './screens/home/home.component';
import {DetailCateComponent} from './screens/detail-cate/detail-cate.component';
import {AddCateComponent} from './screens/add-cate/add-cate.component';
import {EditCateComponent} from './screens/edit-cate/edit-cate.component';
import {ProductComponent} from './screens/product/product.component';
import {ProductAddComponent} from './screens/product-add/product-add.component';
import {ProductEditComponent} from './screens/product-edit/product-edit.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "detail/:id",
    component: DetailCateComponent
  },
  {
    path: "category/addcate",
    component: AddCateComponent
  },
  {
    path: "productcate/:id",
    component: ProductComponent
  },
  {
    path: "category/editcate/:id",
    component: EditCateComponent
  },
  {
    path: "addproduct/:id",
    component: ProductAddComponent
  },
  {
    path:"productcate/:cateid/editproduct/:id",
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }