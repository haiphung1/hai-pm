import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
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
    pro = new FormGroup( {
      cate_id: new FormControl(''),
      product_name: new FormControl('',[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      image: new FormControl('',[
        Validators.required,
        Validators.pattern('^.+\.(jpg|gif|png|svg)+$'),
      ]),
      price: new FormControl('',[
        Validators.required,
        Validators.min(1),
      ]),
      detail: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      amount: new FormControl('',[
        Validators.required,
        Validators.min(1)
      ]),
      status: new FormControl('',[
        Validators.required,
      ]),
    });
    get name() {return this.pro.get('product_name')}
    get image() {return this.pro.get('image')}
    get price() {return this.pro.get('price')}
    get detail() {return this.pro.get('detail')}
    get amount() {return this.pro.get('amount')}
    get status() {return this.pro.get('status')}
    cate_id=0;
  ngOnInit() {
    this.cate_id = this.route.snapshot.params.id;
    console.log(this.cate_id)
  } 
  saveProducts(){
   
      this.cate_id = this.route.snapshot.params.id;
      this.proService.addProducts(this.pro.value,this.cate_id)

            .subscribe(data => {
              console.log(data);
              this.pro = new FormGroup({
                cate_id: new FormControl(''),
                product_name: new FormControl(''),
                image: new FormControl(''),
                price: new FormControl(''),
                detail: new FormControl(''),
                amount: new FormControl(''),
                status: new FormControl('')
              });
              this.router.navigate(['/productcate/' + this.cate_id]);
            });
  }

}
