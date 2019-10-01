import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UusTreeningComponent } from './uus-treening.component';

describe('UusTreeningComponent', () => {
  let component: UusTreeningComponent;
  let fixture: ComponentFixture<UusTreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UusTreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UusTreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
