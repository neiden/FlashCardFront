import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudysetDialogComponent } from './create-studyset-dialog.component';

describe('CreateStudysetDialogComponent', () => {
  let component: CreateStudysetDialogComponent;
  let fixture: ComponentFixture<CreateStudysetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudysetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudysetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
