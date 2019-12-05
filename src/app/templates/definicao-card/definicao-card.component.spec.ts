import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicaoCardComponent } from './definicao-card.component';

describe('DefinicaoCardComponent', () => {
  let component: DefinicaoCardComponent;
  let fixture: ComponentFixture<DefinicaoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicaoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicaoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
