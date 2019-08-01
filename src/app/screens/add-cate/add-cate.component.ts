import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {
  category = {
    name: "",
    image: "",
    address:"",
    owner_image:"",
    city:""
  };
  constructor(private cateService: CategoryService, private router: Router) { }

  ngOnInit() {
  }
  saveCategory(){
    this.cateService.addCategory(this.category)
                    .subscribe(data=>{
                      console.log(data);
                       this.category = {
                         name:"",
                         image:"",
                         address:"",
                         owner_image:"",
                         city:""
                       }
                       this.router.navigate(['/']);
                    });
  }
}
