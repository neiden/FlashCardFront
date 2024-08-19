import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudysetDialogComponent } from './delete-studyset-dialog.component';

describe('DeleteStudysetDialogComponent', () => {
  let component: DeleteStudysetDialogComponent;
  let fixture: ComponentFixture<DeleteStudysetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudysetDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteStudysetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
