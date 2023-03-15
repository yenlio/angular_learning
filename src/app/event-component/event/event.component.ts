import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// declare let toastr: { success: (arg0: number) => void; }
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  constructor(private toastr: ToastrService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  events={
    id:1,
    name:"hoang yen",
    date:'01/12/1999',
    time:"10h",
    price:500.000,
    imagesURL:'/assets/images/anh1.jpg'
  }
  handle(item:any){
    console.log("itme");

    this.toastr.success('Thành công!', 'Thông báo');
  }

}
