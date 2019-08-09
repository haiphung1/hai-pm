import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proService: ProductService
    
    ) { }
    pro = {
      cate_id: new FormControl(''),
      product_name: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      detail: new FormControl(''),
      amount: new FormControl(''),
      status: new FormControl('')
      }
  
     cate_id=0;
  ngOnInit() {
    this.cate_id = this.route.snapshot.params.id;
    console.log(this.cate_id)
  } 
  saveProducts(){
    let sendData = {
      cate_id: this.pro.cate_id.value,
      product_name: this.pro.product_name.value,
      image: this.pro.image.value,
      price: this.pro.price.value,
      detail:this.pro.detail.value,
      amount: this.pro.amount.value,
      status: this.pro.status.value

      }
      this.cate_id = this.route.snapshot.params.id;
      this.proService.addProducts(sendData,this.cate_id)

            .subscribe(data => {
              
              this.pro = {
                cate_id: new FormControl(''),
                product_name: new FormControl(''),
                image: new FormControl(''),
                price: new FormControl(''),
                detail: new FormControl(''),
                amount: new FormControl(''),
                status: new FormControl('')
              }
              this.router.navigate(['/productcate/' + this.cate_id]);
            });
  }

}
