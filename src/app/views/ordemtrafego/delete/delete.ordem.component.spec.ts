import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteOrdemComponent } from './delete.ordem.component';

describe('DeleteOrdemComponent', () => {
  let component: DeleteOrdemComponent;
  let fixture: ComponentFixture<DeleteOrdemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteOrdemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteOrdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
