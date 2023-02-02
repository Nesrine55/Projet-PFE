import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailvalidationComponent } from './mailvalidation.component';

describe('MailvalidationComponent', () => {
  let component: MailvalidationComponent;
  let fixture: ComponentFixture<MailvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailvalidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
