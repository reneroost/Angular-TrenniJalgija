import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UusTrennComponent } from './uus-trenn.component';

describe('UusTrennComponent', () => {
  let component: UusTrennComponent;
  let fixture: ComponentFixture<UusTrennComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UusTrennComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UusTrennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
