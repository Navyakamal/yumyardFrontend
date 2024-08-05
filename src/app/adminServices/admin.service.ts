import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  base_url="https://yumyardbackend.onrender.com"

  constructor(private http:HttpClient) { }

  loginApi(){
    return this.http.get(`${this.base_url}/admins`)
  }
}
