import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EelnevadTrennidComponent } from './eelnevad-trennid.component';

describe('EelnevadTrennidComponent', () => {
  let component: EelnevadTrennidComponent;
  let fixture: ComponentFixture<EelnevadTrennidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EelnevadTrennidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EelnevadTrennidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
