import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensCondutorComponent } from './ordens.component';

describe('OrdensCondutorComponent', () => {
  let component: OrdensCondutorComponent;
  let fixture: ComponentFixture<OrdensCondutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdensCondutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensCondutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
