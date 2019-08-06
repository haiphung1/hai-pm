import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
 
  cateForm = new FormGroup({
  	name: new FormControl(''),
	image: new FormControl('')
  });
  cateId: string;
  ngOnInit() {
    // this.id = this.route.snapshot.params.id;
    // this.cateService.getListCategory()
    //                 .subscribe(data=>{
    //                   this.category = data.find(item=>item.id == this.id);
    //                 })
    this.cateId = this.route.snapshot.params.id;
  	this.cateService.getCategoryById(this.cateId)
  					.subscribe(data => {
  						this.cateForm.setValue({
  							name: data.name,
  							image: data.image
  						});
  					});
  }
  saveCategory(){
  //   this.cateService.editCategory(this.category)
  //                   .subscribe(data=>{
  //                      this.category = {
  //                        name:"",
  //                        image:""
  //                      }
  //                      this.router.navigate(['/']);
  //                   });
  // }
  this.cateService.editCategory(this.cateId, this.cateForm.value)
  					.subscribe(data => {
  						console.log(data);
  						this.router.navigate(['/']);
  					})
  }
}
