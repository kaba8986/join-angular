import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddedSnackComponent } from './task-added-snack.component';

describe('TaskAddedSnackComponent', () => {
  let component: TaskAddedSnackComponent;
  let fixture: ComponentFixture<TaskAddedSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAddedSnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskAddedSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
