import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelasEmprestimoComponent } from './parcelas-emprestimo.component';

describe('ParcelasEmprestimoComponent', () => {
  let component: ParcelasEmprestimoComponent;
  let fixture: ComponentFixture<ParcelasEmprestimoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelasEmprestimoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelasEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
