import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoOfertaComponent } from './definicao-oferta.component';

describe('DefinicaoOfertaComponent', () => {
  let component: DefinicaoOfertaComponent;
  let fixture: ComponentFixture<DefinicaoOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicaoOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
