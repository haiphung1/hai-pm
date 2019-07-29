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
    image:""
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cateService: CategoryService
  ) { }
  id="0";
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
                         image:""
                       }
                       this.router.navigate(['/']);
                    });
  }

}
