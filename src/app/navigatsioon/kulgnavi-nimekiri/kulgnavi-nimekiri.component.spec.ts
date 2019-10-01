import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KulgnaviNimekiriComponent } from './kulgnavi-nimekiri.component';

describe('KulgnaviNimekiriComponent', () => {
  let component: KulgnaviNimekiriComponent;
  let fixture: ComponentFixture<KulgnaviNimekiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KulgnaviNimekiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KulgnaviNimekiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
