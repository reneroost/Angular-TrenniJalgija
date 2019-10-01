import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeningComponent } from './treening.component';

describe('TreeningComponent', () => {
  let component: TreeningComponent;
  let fixture: ComponentFixture<TreeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
