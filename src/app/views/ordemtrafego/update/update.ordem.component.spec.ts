import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrdemComponent } from './update.ordem.component';

describe('UpdateOrdemComponent', () => {
  let component: UpdateOrdemComponent;
  let fixture: ComponentFixture<UpdateOrdemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOrdemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
