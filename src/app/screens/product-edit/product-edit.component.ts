import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private proService: ProductService
  ) { }
    proForm = new FormGroup({
      cate_id: new FormControl(''),
      product_name: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      detail: new FormControl(''),
      amount: new FormControl(''),
      status: new FormControl('') 
    });
    cate_id =0;
    proId: string;
  ngOnInit() {
    //                 })
    this.cate_id = this.route.snapshot.params.cateid;
    this.proId = this.route.snapshot.params.id;
    this.proService.getProductByid(this.cate_id,this.proId)
  					.subscribe(data => {
              console.log(data);
  						this.proForm.setValue({
                cate_id: data.cate_id,
  							product_name: data.product_name,
                image: data.image,
                price: data.price,
                detail: data.detail,
                amount: data.amount,
                status: data.status
  						});
  					});
  }

  saveEditProducts(){
    this.proService.editProduct(this.cate_id,this.proId, this.proForm.value)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['/productcate/'+ this.cate_id]);
    })
  }

}
