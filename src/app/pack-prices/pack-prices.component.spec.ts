import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackPricesComponent } from './pack-prices.component';

describe('PackPricesComponent', () => {
  let component: PackPricesComponent;
  let fixture: ComponentFixture<PackPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
