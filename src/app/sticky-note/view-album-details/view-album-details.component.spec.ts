import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlbumDetailsComponent } from './view-album-details.component';

describe('ViewAlbumDetailsComponent', () => {
  let component: ViewAlbumDetailsComponent;
  let fixture: ComponentFixture<ViewAlbumDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAlbumDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
