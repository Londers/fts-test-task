import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { orderPageComponent } from './order-page.component';

describe('orderPageComponent', () => {
  let component: orderPageComponent;
  let fixture: ComponentFixture<orderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ orderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(orderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
