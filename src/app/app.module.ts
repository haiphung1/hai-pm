import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CateItemComponent } from './components/cate-item/cate-item.component';
import { HomeComponent } from './screens/home/home.component';
import { DetailCateComponent } from './screens/detail-cate/detail-cate.component';
import { AddCateComponent } from './screens/add-cate/add-cate.component';
import { EditCateComponent } from './screens/edit-cate/edit-cate.component';
import { ProductComponent } from './screens/product/product.component';
import { ProductAddComponent } from './screens/product-add/product-add.component';
import { ProductEditComponent } from './screens/product-edit/product-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    CateItemComponent,
    HomeComponent,
    DetailCateComponent,
    AddCateComponent,
    EditCateComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }