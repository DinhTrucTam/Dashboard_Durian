import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private verifiedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  verified$ = this.verifiedSubject.asObservable();

  constructor() { }

  person_type: string;
  setVerified(verified: boolean, type: string): void {
    this.person_type = type;
    this.verifiedSubject.next(verified);
  }

  isAuthenticated(): String {
    if (this.person_type == 'admin')
    {
      return 'adminAuthenticated';
    }
    else if (this.person_type == 'user')
    {
      return 'userAuthenticated';
    }
    return 'null';
  }
}