import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './screens/home/home.component';
import {DetailCateComponent} from './screens/detail-cate/detail-cate.component';
import {AddCateComponent} from './screens/add-cate/add-cate.component';
import {EditCateComponent} from './screens/edit-cate/edit-cate.component';

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
    path: "category/editcate/:id",
    component: EditCateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }