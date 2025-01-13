import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeRemovalComponent } from './office-removal.component';

describe('OfficeRemovalComponent', () => {
  let component: OfficeRemovalComponent;
  let fixture: ComponentFixture<OfficeRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeRemovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
