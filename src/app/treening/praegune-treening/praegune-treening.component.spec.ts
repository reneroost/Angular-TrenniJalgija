import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraeguneTreeningComponent } from './praegune-treening.component';

describe('PraeguneTreeningComponent', () => {
  let component: PraeguneTreeningComponent;
  let fixture: ComponentFixture<PraeguneTreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraeguneTreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraeguneTreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
