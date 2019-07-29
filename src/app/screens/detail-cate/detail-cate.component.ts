import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-detail-cate',
  templateUrl: './detail-cate.component.html',
  styleUrls: ['./detail-cate.component.css']
})
export class DetailCateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
    id = "0";
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
