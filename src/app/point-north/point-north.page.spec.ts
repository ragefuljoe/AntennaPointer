import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointNorthPage } from './point-north.page';

describe('PointNorthPage', () => {
  let component: PointNorthPage;
  let fixture: ComponentFixture<PointNorthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointNorthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointNorthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
