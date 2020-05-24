import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar1Component } from './navbar1.component';

describe('Navbar1Component', () => {
  let component: Navbar1Component;
  let fixture: ComponentFixture<Navbar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
