import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  selector: 'app-cate-item',
  templateUrl: './cate-item.component.html',
  styleUrls: ['./cate-item.component.css']
})
export class CateItemComponent implements OnInit {

  constructor() { }
  @Input() cate: any;  
  @Output() onRemoveCate= new EventEmitter<any>();
  ngOnInit() {
  }

  onRemoveEvent(cate){
    this.onRemoveCate.emit(cate);
  }
}
