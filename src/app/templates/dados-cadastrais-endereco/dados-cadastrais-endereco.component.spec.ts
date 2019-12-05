import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCadastraisEnderecoComponent } from './dados-cadastrais-endereco.component';

describe('DadosCadastraisEnderecoComponent', () => {
  let component: DadosCadastraisEnderecoComponent;
  let fixture: ComponentFixture<DadosCadastraisEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCadastraisEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCadastraisEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
