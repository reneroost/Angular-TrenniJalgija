import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreerimineComponent } from './registreerimine.component';

describe('RegistreerimineComponent', () => {
  let component: RegistreerimineComponent;
  let fixture: ComponentFixture<RegistreerimineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreerimineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreerimineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
