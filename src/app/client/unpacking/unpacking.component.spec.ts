import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpackingComponent } from './unpacking.component';

describe('UnpackingComponent', () => {
  let component: UnpackingComponent;
  let fixture: ComponentFixture<UnpackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnpackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnpackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
