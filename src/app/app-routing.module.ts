import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { Flashcard } from './Models/flashcard.model';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PermissionsService } from './Services/permissions.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [PermissionsService]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'feed/:id', component: FeedComponent, canActivate: [PermissionsService]},
  {path: 'flashcard/{id}', component: Flashcard, canActivate: [PermissionsService]}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
