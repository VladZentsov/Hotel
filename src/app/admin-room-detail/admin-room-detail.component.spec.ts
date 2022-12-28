import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomDetailComponent } from './admin-room-detail.component';

describe('AdminRoomDetailComponent', () => {
  let component: AdminRoomDetailComponent;
  let fixture: ComponentFixture<AdminRoomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRoomDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
