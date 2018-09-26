import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service'
import { Services } from '@angular/core/src/view';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  
  constructor(private local:ServicesService) { }
  data = [];
  count:number = 0;
  ngOnInit() {
    if(this.local.get('key1')){
      this.data = JSON.parse(this.local.get('key1'));
      this.arrCounter();
  }
  else{
    this.data = [];
  }
  }
  add(value){
    this.data.push(value);
    this.arrCounter();
    this.local.set('key1',JSON.stringify(this.data));
  }
  delete(i){
    this.data.splice(i,1);
    this.arrCounter();
    this.local.set('key1',JSON.stringify(this.data));
  }
  arrCounter(){
    this.count = 0;
    this.data.forEach((value)=>{
      if(value.done == false) {
        this.count++;
      }
    });
  }
  change(i){
    this.arrCounter();
    this.local.set('key1',JSON.stringify(this.data));
  }
}


