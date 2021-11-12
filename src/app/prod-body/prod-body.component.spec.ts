import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBodyComponent } from './prod-body.component';

describe('ProdBodyComponent', () => {
  let component: ProdBodyComponent;
  let fixture: ComponentFixture<ProdBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
