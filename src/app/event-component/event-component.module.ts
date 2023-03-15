import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { ThumnailComponent } from './event/thumnail/thumnail.component';
import { ChildComponentComponent } from './event/child-component/child-component.component';
// import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EventComponent,
    ThumnailComponent,
    ChildComponentComponent,
    
    // ThumbnailComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
      ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    // ChildComponentComponent,

  ],
  exports: [
    EventComponent
  ]
  // exports: [ThumnailComponent] 
})
export class EventComponentModule { }
