import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdensVeiculoComponent } from './ordens.component';

describe('OrdensVeiculoComponent', () => {
  let component: OrdensVeiculoComponent;
  let fixture: ComponentFixture<OrdensVeiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdensVeiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdensVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
