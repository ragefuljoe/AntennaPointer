import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointNorthStartPage } from './point-north-start.page';

describe('PointNorthStartPage', () => {
  let component: PointNorthStartPage;
  let fixture: ComponentFixture<PointNorthStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointNorthStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointNorthStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
