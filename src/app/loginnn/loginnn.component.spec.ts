import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginnnComponent } from './loginnn.component';

describe('LoginnnComponent', () => {
  let component: LoginnnComponent;
  let fixture: ComponentFixture<LoginnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginnnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
