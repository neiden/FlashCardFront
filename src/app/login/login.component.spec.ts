import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DatabaseService } from '../Services/database.service';
import { LoadingIndicatorService } from '../Services/loading-indicator.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
class MockDatabaseService {
  login(username: string, password: string) {
    return of({ token: 'fake-token' }); 
  }
}

class MockLoadingIndicatorService {
  loadingOn() {}
  loadingOff() {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockDatabaseService: MockDatabaseService;
  let mockLoadingIndicatorService: MockLoadingIndicatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, MatCardModule ],
      providers: [
        { provide: DatabaseService, useClass: MockDatabaseService },
        { provide: LoadingIndicatorService, useClass: MockLoadingIndicatorService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockDatabaseService = TestBed.inject(DatabaseService) as any;
    mockLoadingIndicatorService = TestBed.inject(LoadingIndicatorService) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
