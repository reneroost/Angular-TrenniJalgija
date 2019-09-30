import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraeguneTrennComponent } from './praegune-trenn.component';

describe('PraeguneTrennComponent', () => {
  let component: PraeguneTrennComponent;
  let fixture: ComponentFixture<PraeguneTrennComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraeguneTrennComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraeguneTrennComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
