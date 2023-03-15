import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-thumnail',
  templateUrl: './thumnail.component.html',
  styleUrls: ['./thumnail.component.scss']
})
export class ThumnailComponent implements OnInit  {
  @Input() ev:any
  someProperti:any="du lieu"
  ngOnInit(): void {
  }

  logFoo(){
    console.log("foo");
    
  }
  
}
