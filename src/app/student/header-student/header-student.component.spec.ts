import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStudentComponent } from './header-student.component';

describe('HeaderStudentComponent', () => {
  let component: HeaderStudentComponent;
  let fixture: ComponentFixture<HeaderStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
