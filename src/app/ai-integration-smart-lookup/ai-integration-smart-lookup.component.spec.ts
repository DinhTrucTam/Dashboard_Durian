import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIIntegrationSmartLookupComponent } from './ai-integration-smart-lookup.component';

describe('AIIntegrationSmartLookupComponent', () => {
  let component: AIIntegrationSmartLookupComponent;
  let fixture: ComponentFixture<AIIntegrationSmartLookupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIIntegrationSmartLookupComponent]
    });
    fixture = TestBed.createComponent(AIIntegrationSmartLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
