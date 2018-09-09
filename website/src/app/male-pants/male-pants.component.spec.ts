import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalePantsComponent } from './male-pants.component';

describe('MalePantsComponent', () => {
  let component: MalePantsComponent;
  let fixture: ComponentFixture<MalePantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalePantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalePantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
