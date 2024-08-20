import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudysetComponent } from './studyset.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

describe('StudysetComponent', () => {
  let component: StudysetComponent;
  let fixture: ComponentFixture<StudysetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudysetComponent ],
      imports: [HttpClientTestingModule, MatDialogModule, MatCardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudysetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
