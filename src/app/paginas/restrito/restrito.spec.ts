import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restrito } from './restrito';

describe('Restrito', () => {
  let component: Restrito;
  let fixture: ComponentFixture<Restrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
