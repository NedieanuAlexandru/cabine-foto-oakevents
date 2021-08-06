import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinModelsComponent } from './cabin-models.component';

describe('CabinModelsComponent', () => {
  let component: CabinModelsComponent;
  let fixture: ComponentFixture<CabinModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
