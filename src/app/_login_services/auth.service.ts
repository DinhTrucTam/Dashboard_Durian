import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private verifiedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  verified$ = this.verifiedSubject.asObservable();

  constructor() { }

  setVerified(verified: boolean): void {
    this.verifiedSubject.next(verified);
  }

  isAuthenticated(): boolean {
    return this.verifiedSubject.value;
  }
}