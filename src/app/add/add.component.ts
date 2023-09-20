import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserdataService } from '../service/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  message:boolean = false;
  constructor(private userdata: UserdataService, private router:Router){ }

  addUser = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    gender: new FormControl('',[Validators.required]),
    profile: new FormControl('',[Validators.required])

})

get nameVal(){
  return this.addUser.get('name')
}
get emailValidator(){
  return this.addUser.get('email')
}
get gendVal(){
  return this.addUser.get('gender')
}
get profilVal(){
  return this.addUser.get('profile')
}

saveData(){
  console.log(this.addUser.value);  
  this.userdata.createUserData(this.addUser.value).subscribe((result)=>{
    // redirect to homepage
    this.router.navigate(["/"]);
    console.log(result)
    this.message = true;
    this.addUser.reset();
  
  })
}

}
