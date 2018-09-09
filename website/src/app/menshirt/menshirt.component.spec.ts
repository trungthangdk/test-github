import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenshirtComponent } from './menshirt.component';

describe('MenshirtComponent', () => {
  let component: MenshirtComponent;
  let fixture: ComponentFixture<MenshirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenshirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
