import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DurianStagesDialogComponent } from './durian-stages-dialog.component';

describe('DurianStagesDialogComponent', () => {
  let component: DurianStagesDialogComponent;
  let fixture: ComponentFixture<DurianStagesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DurianStagesDialogComponent]
    });
    fixture = TestBed.createComponent(DurianStagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
