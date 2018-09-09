import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanShirtComponent } from './woman-shirt.component';

describe('WomanShirtComponent', () => {
  let component: WomanShirtComponent;
  let fixture: ComponentFixture<WomanShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
