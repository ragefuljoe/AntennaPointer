import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointUpIntroPage } from './point-up-intro.page';

describe('PointUpIntroPage', () => {
  let component: PointUpIntroPage;
  let fixture: ComponentFixture<PointUpIntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointUpIntroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointUpIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
