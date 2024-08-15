import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCardDialogComponent } from './update-card-dialog.component';

describe('UpdateCardDialogComponent', () => {
  let component: UpdateCardDialogComponent;
  let fixture: ComponentFixture<UpdateCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
