import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrdemComponent } from './create.ordem.component';

describe('CreateOrdemComponent', () => {
  let component: CreateOrdemComponent;
  let fixture: ComponentFixture<CreateOrdemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrdemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
