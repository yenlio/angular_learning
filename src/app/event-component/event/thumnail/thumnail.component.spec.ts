import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumnailComponent } from './thumnail.component';

describe('ThumnailComponent', () => {
  let component: ThumnailComponent;
  let fixture: ComponentFixture<ThumnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThumnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
