import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autenticaoGuard } from './autenticao-guard';

describe('autenticaoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autenticaoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
