import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
// import { faDownload, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  users:any;
  constructor (private userdata:UserdataService){

    // this.userdata.users().subscribe((data)=>{
    //   console.log(data);
    //   this.users = data
    // })
   }
     ngOnInit(): void {
      this.userdata.users().subscribe((data)=>{
        console.log(data);
        this.users = data
      })
     }
   
   deleteDetails(users_id:any){
    this.userdata.deleteUserDetail(users_id).subscribe((result)=>{
      console.log(result)
      this.ngOnInit()
    })
   }



   searchName:string = '';
   

  //  faTrash = faDownload;
  //  faEdit = faEdit;
}
