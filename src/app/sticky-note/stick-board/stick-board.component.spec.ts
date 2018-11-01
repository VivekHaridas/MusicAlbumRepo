import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickBoardComponent } from './stick-board.component';

describe('StickBoardComponent', () => {
  let component: StickBoardComponent;
  let fixture: ComponentFixture<StickBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
