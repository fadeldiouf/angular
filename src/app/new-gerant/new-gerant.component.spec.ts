import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGerantComponent } from './new-gerant.component';

describe('NewGerantComponent', () => {
  let component: NewGerantComponent;
  let fixture: ComponentFixture<NewGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
