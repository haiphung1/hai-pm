import { Injectable } from '@angular/core';
import { HttpClient, 
  HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://5d440cd02c6da100147e38fb.mockapi.io/categories/";
  constructor(private http: HttpClient) { }
  public getListProducts(cateId){
  	return this.http.get<any[]>(`${this.apiUrl}/${cateId}/products/`);   
  }
  public addProducts(data,cate_id){
    console.log(data)
    return this.http.post<any[]>(`${this.apiUrl}/${cate_id}/products/`,data);   
  }
  // public removePro(cate_id,proId){
  //   let removeUrl= `${this.apiUrl}/${cate_id}/products/${proId}`;
  //   return this.http.delete<any>(removeUrl);

  // }
  public getProductByid(cate_id,proId){
    console.log(cate_id);
    console.log(proId);
    return this.http.get<any>(`${this.apiUrl}/${cate_id}/products/${proId}`);
  } 
  public editProduct(cate_id,proId,data){
    let url = `${this.apiUrl}/${cate_id}/products/${proId}`;
    return this.http.put<any>(url, data);
  }
  public removeProduct(cateId,proId){
    let removeUrl= `${this.apiUrl}/${cateId}/products/${proId}`;
    console.log(cateId);
    console.log(proId); 
    return this.http.delete<any>(removeUrl);
  }
 
}
