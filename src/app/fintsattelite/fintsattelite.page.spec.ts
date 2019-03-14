import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FintsattelitePage } from './fintsattelite.page';

describe('FintsattelitePage', () => {
  let component: FintsattelitePage;
  let fixture: ComponentFixture<FintsattelitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FintsattelitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FintsattelitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
