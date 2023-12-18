import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtsComponent } from './tts.component';

describe('TtsComponent', () => {
  let component: TtsComponent;
  let fixture: ComponentFixture<TtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TtsComponent]
    });
    fixture = TestBed.createComponent(TtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
