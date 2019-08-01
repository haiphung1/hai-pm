import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {
  category = {
    name:"",
    image:"",
    address:"",
    owner_image:"",
    city:""
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cateService: CategoryService
  ) { }
  id="";
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.cateService.getListCategory()
                    .subscribe(data=>{
                      this.category = data.find(item=>item.id == this.id);
                    })
  }
  saveCategory(){
    this.cateService.editCategory(this.category)
                    .subscribe(data=>{
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
