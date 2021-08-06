import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCabinsComponent } from './photo-cabins.component';

describe('PhotoCabinsComponent', () => {
  let component: PhotoCabinsComponent;
  let fixture: ComponentFixture<PhotoCabinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCabinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCabinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
