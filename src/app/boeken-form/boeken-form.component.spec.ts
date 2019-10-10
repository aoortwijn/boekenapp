import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekenFormComponent } from './boeken-form.component';

describe('BoekenFormComponent', () => {
  let component: BoekenFormComponent;
  let fixture: ComponentFixture<BoekenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
