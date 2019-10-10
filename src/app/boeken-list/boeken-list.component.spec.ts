import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoekenListComponent } from './boeken-list.component';

describe('BoekenListComponent', () => {
  let component: BoekenListComponent;
  let fixture: ComponentFixture<BoekenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoekenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoekenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
