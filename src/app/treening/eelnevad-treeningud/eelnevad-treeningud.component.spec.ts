import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EelnevadTreeningudComponent } from './eelnevad-treeningud.component';

describe('EelnevadTreeningudComponent', () => {
  let component: EelnevadTreeningudComponent;
  let fixture: ComponentFixture<EelnevadTreeningudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EelnevadTreeningudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EelnevadTreeningudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
