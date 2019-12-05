import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCadastraisClienteComponent } from './dados-cadastrais-cliente.component';

describe('DadosCadastraisClienteComponent', () => {
  let component: DadosCadastraisClienteComponent;
  let fixture: ComponentFixture<DadosCadastraisClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCadastraisClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCadastraisClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
