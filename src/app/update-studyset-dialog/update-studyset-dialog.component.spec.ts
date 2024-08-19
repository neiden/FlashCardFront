import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudysetDialogComponent } from './update-studyset-dialog.component';

describe('UpdateStudysetDialogComponent', () => {
  let component: UpdateStudysetDialogComponent;
  let fixture: ComponentFixture<UpdateStudysetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudysetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudysetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
