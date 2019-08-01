import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './screens/home/home.component';
import {AddCateComponent} from './screens/add-cate/add-cate.component';
import {EditCateComponent} from './screens/edit-cate/edit-cate.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
 
  {
    path: "category/add",
    component: AddCateComponent
  },
  {
    path: "category/edit/:id",
    component: EditCateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }