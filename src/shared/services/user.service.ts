import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private roles: string[];

  constructor() {
    this.roles = ['ANONYMOUS', 'ADMIN', 'USER'];
   }

   getRole() {
     return this.roles[3];
   }
}
