import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCostumizada } from './diretiva-costumizada';

describe('DiretivaCostumizada', () => {
  let component: DiretivaCostumizada;
  let fixture: ComponentFixture<DiretivaCostumizada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaCostumizada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaCostumizada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
