import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOrdemComponent } from './read.ordem.component';

describe('ReadComponent', () => {
  let component: ReadOrdemComponent;
  let fixture: ComponentFixture<ReadOrdemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOrdemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOrdemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
