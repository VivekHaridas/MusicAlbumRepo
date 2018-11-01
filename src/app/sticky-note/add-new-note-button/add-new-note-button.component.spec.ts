import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNoteButtonComponent } from './add-new-note-button.component';

describe('AddNewNoteButtonComponent', () => {
  let component: AddNewNoteButtonComponent;
  let fixture: ComponentFixture<AddNewNoteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewNoteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewNoteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
