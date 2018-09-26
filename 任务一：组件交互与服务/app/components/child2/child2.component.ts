import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }
  @Input() count;
  @Input() arr;
  @Output() deleteIndex = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  delete(e) {
    this.deleteIndex.emit(e);
  }
  change(e,i){
    this.arr[i].done = !this.arr[i].done;
    this.changeIndex.emit(e);
  }
}
