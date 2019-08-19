import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private cateService: CategoryService
              
            ) { }
  pros =[];
  id="";
  category = { 
    name:"",
    image:""
  };
  cateId: string;
 
  ngOnInit() {
    this.cateId = this.route.snapshot.params.id;

    this.productService.getListProducts(this.cateId)
                    .subscribe(data=>{
                        this.pros = data;
                    });
    this.id = this.route.snapshot.params.id;
                    this.cateService.getListCategory()
                                    .subscribe(data=>{
                                      this.category = data.find(item=>item.id == this.id);
                                    })
   
  }

  removeProduct(p){
    console.log(p);
    let conf = confirm('Bạn chắc chắn muốn xóa sản phẩm này')
    if(conf){
      this.productService.removeProduct(this.cateId,p)
      .subscribe(data=>{
        this.pros = this.pros.filter(item=>item.id != p); 
        console.log(p.id);
      })
      
    }
 
  }
  
}
