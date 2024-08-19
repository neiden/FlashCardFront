import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseService } from '../Services/database.service';
import { LoadingIndicatorService } from '../Services/loading-indicator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })
  errorMessage = "";
  registrationFailed: boolean = false;

  constructor(private api: DatabaseService,  private loadingService: LoadingIndicatorService, private router: Router){}




  onSubmit(){
    this.loadingService.loadingOn();
    this.api.createAccount(this.registerForm.controls.username.value!, this.registerForm.controls.password.value!).subscribe(
      {next: (d: any) => {
        localStorage.setItem('token', d.token);
        
        this.router.navigate(['/login']);
        this.loadingService.loadingOff();
        this.registrationFailed = false;
      },
        error: (e) => {
          console.log(e),
          this.registrationFailed = true;
          this.loadingService.loadingOff();
          if (e.error.message){
            this.errorMessage = e.error.message;
          }
          else{
            this.errorMessage = "Registration failed due to an unexpected error. Please try again later.";
          }
        }
      })
  }


}
