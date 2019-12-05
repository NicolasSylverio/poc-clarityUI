import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarTokenComponent } from './confirmar-token.component';

describe('ConfirmarTokenComponent', () => {
  let component: ConfirmarTokenComponent;
  let fixture: ComponentFixture<ConfirmarTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
