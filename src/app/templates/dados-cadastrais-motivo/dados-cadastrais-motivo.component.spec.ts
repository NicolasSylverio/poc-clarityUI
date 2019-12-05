import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCadastraisMotivoComponent } from './dados-cadastrais-motivo.component';

describe('DadosCadastraisMotivoComponent', () => {
  let component: DadosCadastraisMotivoComponent;
  let fixture: ComponentFixture<DadosCadastraisMotivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCadastraisMotivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCadastraisMotivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
