import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertismentCatComponent } from './advertisment-cat.component';

describe('AdvertismentCatComponent', () => {
  let component: AdvertismentCatComponent;
  let fixture: ComponentFixture<AdvertismentCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertismentCatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertismentCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
