import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointUpStartPage } from './point-up-start.page';

describe('PointUpStartPage', () => {
  let component: PointUpStartPage;
  let fixture: ComponentFixture<PointUpStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointUpStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointUpStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
