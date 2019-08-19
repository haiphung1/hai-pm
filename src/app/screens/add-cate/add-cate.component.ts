import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Route, Router} from '@angular/router';
import { FormControl ,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {
  constructor(private cateService: CategoryService,
    private router: Router) { }
category = new FormGroup({
name: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
  ]),
image: new FormControl('',[
  Validators.required,
  Validators.pattern('^.+\.(jpg|gif|png|svg)+$'),
  ]),

});
get name() {return this.category.get('name')}
get image() {return this.category.get('image')}
ngOnInit() {
}
saveCategory(){
this.cateService.addCategory(this.category.value)
      .subscribe(data => {
        console.log(data);
        this.category = new FormGroup({
          name: new FormControl(''),
          image: new FormControl('')
        });
        this.router.navigate(['/']);
      });
}
}
