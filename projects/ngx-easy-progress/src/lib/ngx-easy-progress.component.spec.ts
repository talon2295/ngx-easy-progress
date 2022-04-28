import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasyProgressComponent } from './ngx-easy-progress.component';

describe('NgxEasyProgressComponent', () => {
  let component: NgxEasyProgressComponent;
  let fixture: ComponentFixture<NgxEasyProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEasyProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEasyProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
