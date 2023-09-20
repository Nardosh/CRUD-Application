import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  message:boolean = false;
  constructor(private userdata: UserdataService , private routerr:Router,  private router:ActivatedRoute){  }
  
  ngOnInit(): void {
    this.userdata.getUserId(this.router.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res);
      this.EditUser = new FormGroup({
        name: new FormControl( res['name'] ),
        email: new FormControl(res ['email']),
        gender: new FormControl(res ['gender']),
        profile: new FormControl(res['profile'])
      })
    })
    console.log(this.EditUser.value)
  }

  EditUser = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    profile: new FormControl(''),
    

})


updateData(){
console.log(this.EditUser.value)
this.userdata.updateUserDetails(this.router.snapshot.params['id'],this.EditUser.value).subscribe((res)=>{
   // redirect to homepage
   this.routerr.navigate(["/"]);
  console.log(res);
})
this.message = true;
this.EditUser.reset();
}

}
