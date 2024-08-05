import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../adminServices/admin.service';
import { Router } from '@angular/router';
import { ToastService } from '../adminServices/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(private fb:FormBuilder,private service:AdminService,private rout:Router,private toast:ToastService){ }

   loginFormModel=this.fb.group({
    email:["",[Validators.required,Validators.pattern('^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$')]],
    psw:["",[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]]
  })

  login(){
    if(this.loginFormModel.valid){
      var path=this.loginFormModel.value
      // console.log(path.email);
      // console.log(path.psw);
      var email=path.email
      var psw=path.psw
      this.service.loginApi().subscribe((data:any)=>{
        var admin_email=data[0].email
        var admin_psw=data[0].password
        if(email==admin_email){
          if(psw==admin_psw){

            this.toast.showSuccess("Login successfully")
            localStorage.setItem("admin", "true");
            console.log('Navigation to /dashboard');
            this.rout.navigateByUrl("/dashboard")
          }
          else{
            this.toast.showError("Incorrect password")
          }
        }
        else{
          this.toast.showError("Incorrect email")
        }
        
      })
    }
    else{
      alert("Invalid form")
    }
    
    
  }
}
