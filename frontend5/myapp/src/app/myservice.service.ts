import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  show()
  { //ng g s myservice
    //ng g c name
    return this.http.get("http://localhost:3000/users");
 
  }

  addUser(n:any)
  {
    return this.http.post("http://localhost:3000/users",n);
  }



}
