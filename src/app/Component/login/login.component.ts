import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginObj: any={
  email:'',
  password:''
}
//Testing
router=inject(Router);
onLogin()
{
  if(this.loginObj.email=='admin@gmail.com' && this.loginObj.password=='123')
  {
this.router.navigateByUrl('/client');
localStorage.setItem('empErpUser',this.loginObj.email)
  }
  else{
    alert('wrong credentials');
  }
}


}
