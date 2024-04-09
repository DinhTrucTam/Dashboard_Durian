import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRImageDialogComponent } from './qr-image-dialog.component';

describe('QRImageDialogComponent', () => {
  let component: QRImageDialogComponent;
  let fixture: ComponentFixture<QRImageDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QRImageDialogComponent]
    });
    fixture = TestBed.createComponent(QRImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
