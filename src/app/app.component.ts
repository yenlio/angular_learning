import { Component, OnInit } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public listData:any
  title = 'my-demo';
  constructor(private testService : TestService){
  }
  ngOnInit(): void {
    this.testService.getHeroes().subscribe((item:any)=>{
    this.listData=item

    })
  }
}
