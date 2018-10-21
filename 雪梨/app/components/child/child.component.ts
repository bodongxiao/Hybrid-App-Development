import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor() { }
  txt:string;

  
  ngOnInit() {
  }
  @Output() addValue = new EventEmitter();
   add(){
        this.addValue.emit(new Msg(this.txt,false));
      } 

    getValue(e){
      if(e.keyCode == 13){
        this.add();
        this.txt = "";
      }
  }
  

}
export class Msg{
  constructor(public title: string, public done:boolean){ }
}
