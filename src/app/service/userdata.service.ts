import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

url = 'http://localhost:3000/users'

// GET REQUEST
  users(){
    return this.http.get(this.url)
  }

// POST REQUEST

createUserData(data:any){
  console.log(data)
  return this.http.post(this.url, data)
  
}

// DELETE REQUEST 

deleteUserDetail(id:any){
  console.log(id)
  return this.http.delete(`${this.url}/${id}`)
}

// GET REQUEST

getUserId(id:number){
  return this.http.get( `${this.url}/${id}`)
}

// PUT REQUEST

updateUserDetails(id:number, data:any){
  return this.http.put(`${this.url}/${id}`,data)
}

}
