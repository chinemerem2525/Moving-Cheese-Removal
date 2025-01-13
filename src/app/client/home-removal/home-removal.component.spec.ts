import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemovalComponent } from './home-removal.component';

describe('HomeRemovalComponent', () => {
  let component: HomeRemovalComponent;
  let fixture: ComponentFixture<HomeRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRemovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
