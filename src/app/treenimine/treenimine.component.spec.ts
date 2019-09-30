import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenimineComponent } from './treenimine.component';

describe('TreenimineComponent', () => {
  let component: TreenimineComponent;
  let fixture: ComponentFixture<TreenimineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreenimineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreenimineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
