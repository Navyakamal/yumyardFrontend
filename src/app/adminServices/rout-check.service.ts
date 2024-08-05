import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutCheckService {

  constructor() { }

  isLoggedIn(){
    return !!localStorage.getItem("admin")
  }
}
