import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentInsUpComponent } from './advertisment-ins-up.component';

describe('AdvertismentInsUpComponent', () => {
  let component: AdvertismentInsUpComponent;
  let fixture: ComponentFixture<AdvertismentInsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertismentInsUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertismentInsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
