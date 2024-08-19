import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from '../Services/database.service';
import { Router } from '@angular/router';
import { LoadingIndicatorService } from '../Services/loading-indicator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })  

    
  errorMessage = "";

  loginFailed: boolean = false;

  constructor(private api: DatabaseService, private loadingService: LoadingIndicatorService, private router: Router){}

  onSubmit(){
    this.loadingService.loadingOn();
    this.api.login(this.loginForm.controls.username.value!, this.loginForm.controls.password.value!).subscribe(
      {
        next: (result: any) => {
          localStorage.setItem('token', result.token);
          localStorage.setItem('username', this.loginForm.controls.username.value!);
          this.router.navigate(['/home']);
          this.loadingService.loadingOff();
          this.loginFailed = false;
        },
        error: (e) => {
          if (e.error.message) {
            this.errorMessage = e.error.message;
          }
          else{
            this.errorMessage = "Login failed due to an unexpected error. Please try again later.";
          }
          this.loginFailed = true;
          this.loadingService.loadingOff();
        }
      }
    );
  }



}
