import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  base_url="https://yumyardbackend.onrender.com"

  constructor(private http:HttpClient) { }

  addMenuApi=(bodyData:any)=>{
    return this.http.post(`${this.base_url}/dishes`,bodyData)
  }
  getMenuApi=()=>{
    return this.http.get(`${this.base_url}/dishes`)
  }
  deleteMenuApi(id:any){
    return this.http.delete(`${this.base_url}/dishes/${id}`)
  }
  getSingleMenuApi(id:any){
    return this.http.get(`${this.base_url}/dishes/${id}`)
  }
  editmenuApi(id:any,bodyData:any){
    return this.http.put(`${this.base_url}/dishes/${id}`,bodyData)
  }
}
