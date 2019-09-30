import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeretulemastComponent } from './teretulemast.component';

describe('TeretulemastComponent', () => {
  let component: TeretulemastComponent;
  let fixture: ComponentFixture<TeretulemastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeretulemastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeretulemastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
