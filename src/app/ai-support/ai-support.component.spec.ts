import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSupportComponent } from './ai-support.component';

describe('AiSupportComponent', () => {
  let component: AiSupportComponent;
  let fixture: ComponentFixture<AiSupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiSupportComponent]
    });
    fixture = TestBed.createComponent(AiSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
