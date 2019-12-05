import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasEmprestimoComponent } from './ofertas-emprestimo.component';

describe('OfertasEmprestimoComponent', () => {
  let component: OfertasEmprestimoComponent;
  let fixture: ComponentFixture<OfertasEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
