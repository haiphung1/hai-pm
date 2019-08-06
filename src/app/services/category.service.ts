import { Injectable } from '@angular/core';
import { HttpClient, 
			HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://5d440cd02c6da100147e38fb.mockapi.io/categories/";
  constructor(private http: HttpClient) { }

  public getListCategory(){
  	return this.http.get<any[]>(this.apiUrl);
  }
  public  removeCategory(cateId) {
    let removeUrl= `${this.apiUrl}/${cateId}`;
    return this.http.delete<any>(removeUrl);
  }
  public addCategory(data) {
  
    return this.http.post<any>(this.apiUrl, data); 
  }
  // public editCategory(data) {
  
  //   return this.http.put<any>(this.apiUrl + data.id, data); 
  // }
  // function getCategoryById(cateId) 
  // {
  //  return this.http.get<any>(`${this.apiUrl}/${cateId}`); 
  // }

  public getCategoryById(cateId){
    return this.http.get<any>(`${this.apiUrl}/${cateId}`);
  }
  public editCategory(cateId, data){
    let url = `${this.apiUrl}/${cateId}`;
    return this.http.put<any>(url, data);
  }
}