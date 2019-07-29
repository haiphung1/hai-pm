import { Injectable } from '@angular/core';
import { HttpClient, 
			HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "http://5d31932b4901b4001401a044.mockapi.io/categories/";
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
  public editCategory(data) {
  
    return this.http.put<any>(this.apiUrl + data.id, data); 
  }
}